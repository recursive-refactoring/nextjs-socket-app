import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const INACTIVITY_TIME = 5 * 60 * 1000; // 5 minutes

export default function useInactivityLogout() {
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  // Reset inactivity timer
  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    localStorage.setItem("lastActive", Date.now().toString());

    timeoutRef.current = setTimeout(checkInactivity, INACTIVITY_TIME);
  };

  // Check if user has been inactive
  const checkInactivity = () => {
    const lastActive = parseInt(localStorage.getItem("lastActive") || "0", 10);
    if (Date.now() - lastActive > INACTIVITY_TIME) {
      handleLogout();
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("userToken"); // Clear auth token
    localStorage.removeItem("lastActive");
    navigate("/login"); // Redirect to login page
  };

  useEffect(() => {
    const events = ["mousemove", "keydown", "scroll", "click"];

    const handleActivity = () => resetTimer();

    events.forEach((event) => window.addEventListener(event, handleActivity));

    // Sync inactivity across multiple tabs
    const syncAcrossTabs = (event) => {
      if (event.key === "lastActive") {
        resetTimer();
      }
    };

    window.addEventListener("storage", syncAcrossTabs);

    resetTimer(); // Start inactivity tracking

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, handleActivity),
      );
      window.removeEventListener("storage", syncAcrossTabs);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return null; // No UI needed
}
