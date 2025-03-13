import { useTheme } from "@mui/material";

const CommonLogOutIcon = (props: any) => {
  const theme = useTheme();
  const { color = theme?.palette?.secondary?.main } = props;

  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2 18.5583H13.0917C9.39167 18.5583 7.60834 17.1 7.3 13.8333C7.26667 13.4917 7.51667 13.1833 7.86667 13.15C8.2 13.1166 8.51667 13.375 8.55 13.7166C8.79167 16.3333 10.025 17.3083 13.1 17.3083H13.2083C16.6 17.3083 17.8 16.1083 17.8 12.7167V7.28332C17.8 3.89165 16.6 2.69165 13.2083 2.69165H13.1C10.0083 2.69165 8.775 3.68332 8.55 6.34998C8.50834 6.69165 8.21667 6.94998 7.86667 6.91665C7.51667 6.89165 7.26667 6.58332 7.29167 6.24165C7.575 2.92498 9.36667 1.44165 13.0917 1.44165H13.2C17.2917 1.44165 19.0417 3.19165 19.0417 7.28332V12.7167C19.0417 16.8083 17.2917 18.5583 13.2 18.5583Z"
        fill={color}
      />
      <path
        d="M13 10.625H3.51666C3.175 10.625 2.89166 10.3417 2.89166 10C2.89166 9.65833 3.175 9.375 3.51666 9.375H13C13.3417 9.375 13.625 9.65833 13.625 10C13.625 10.3417 13.3417 10.625 13 10.625Z"
        fill={color}
      />
      <path
        d="M5.375 13.4166C5.21667 13.4166 5.05834 13.3583 4.93334 13.2333L2.14167 10.4416C1.9 10.2 1.9 9.79997 2.14167 9.55831L4.93334 6.76664C5.175 6.52497 5.575 6.52497 5.81667 6.76664C6.05834 7.0083 6.05834 7.40831 5.81667 7.64997L3.46667 9.99997L5.81667 12.35C6.05834 12.5916 6.05834 12.9916 5.81667 13.2333C5.7 13.3583 5.53334 13.4166 5.375 13.4166Z"
        fill={color}
      />
    </svg>
  );
};

export default CommonLogOutIcon;
