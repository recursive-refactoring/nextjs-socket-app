import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const INACTIVITY_TIME = 5 * 60 * 1000; // 5 minutes

export default function useInactivityLogout() {
  const router = useRouter();
  const timeoutRef = useRef(null);

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    localStorage.setItem("lastActive", Date.now().toString());
    timeoutRef.current = setTimeout(checkInactivity, INACTIVITY_TIME);
  };

  const checkInactivity = () => {
    const lastActive = parseInt(localStorage.getItem("lastActive") || "0", 10);
    if (Date.now() - lastActive > INACTIVITY_TIME) {
      handleLogout();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken"); // Clear authentication token
    localStorage.removeItem("lastActive");
    router.push("/login"); // Redirect to login page
  };

  useEffect(() => {
    const events = ["mousemove", "keydown", "scroll", "click"];

    const handleActivity = () => resetTimer();

    events.forEach((event) => window.addEventListener(event, handleActivity));

    resetTimer(); // Start timer on mount

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, handleActivity),
      );
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return null;
}
