import { useTheme } from "@mui/material";

const CommonCameraIcon = (props: any) => {
  const theme = useTheme();

  const { color = theme?.palette?.common?.white } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_771_3342)">
        <path
          d="M14.3667 18.9584H5.6334C3.30006 18.9584 1.81673 17.5667 1.6834 15.2417L1.25006 8.36675C1.1834 7.32508 1.54173 6.32508 2.2584 5.56675C2.96673 4.80841 3.96673 4.37508 5.00006 4.37508C5.26673 4.37508 5.52506 4.21675 5.65006 3.96675L6.25006 2.77508C6.74173 1.80008 7.97506 1.04175 9.05006 1.04175H10.9584C12.0334 1.04175 13.2584 1.80008 13.7501 2.76675L14.3501 3.98342C14.4751 4.21675 14.7251 4.37508 15.0001 4.37508C16.0334 4.37508 17.0334 4.80841 17.7417 5.56675C18.4584 6.33342 18.8167 7.32508 18.7501 8.36675L18.3167 15.2501C18.1667 17.6084 16.7251 18.9584 14.3667 18.9584ZM9.05006 2.29175C8.4334 2.29175 7.65006 2.77508 7.36673 3.33341L6.76673 4.53341C6.41673 5.20842 5.74173 5.62508 5.00006 5.62508C4.30006 5.62508 3.65006 5.90841 3.16673 6.41675C2.69173 6.92508 2.45006 7.59175 2.50006 8.28341L2.9334 15.1667C3.0334 16.8501 3.94173 17.7084 5.6334 17.7084H14.3667C16.0501 17.7084 16.9584 16.8501 17.0667 15.1667L17.5001 8.28341C17.5417 7.59175 17.3084 6.92508 16.8334 6.41675C16.3501 5.90841 15.7001 5.62508 15.0001 5.62508C14.2584 5.62508 13.5834 5.20842 13.2334 4.55008L12.6251 3.33341C12.3501 2.78341 11.5667 2.30008 10.9501 2.30008H9.05006V2.29175Z"
          fill={color}
        />
        <path
          d="M11.25 7.29175H8.75C8.40833 7.29175 8.125 7.00841 8.125 6.66675C8.125 6.32508 8.40833 6.04175 8.75 6.04175H11.25C11.5917 6.04175 11.875 6.32508 11.875 6.66675C11.875 7.00841 11.5917 7.29175 11.25 7.29175Z"
          fill={color}
        />
        <path
          d="M10.0001 15.6249C8.15841 15.6249 6.66675 14.1333 6.66675 12.2916C6.66675 10.4499 8.15841 8.95825 10.0001 8.95825C11.8417 8.95825 13.3334 10.4499 13.3334 12.2916C13.3334 14.1333 11.8417 15.6249 10.0001 15.6249ZM10.0001 10.2083C8.85008 10.2083 7.91675 11.1416 7.91675 12.2916C7.91675 13.4416 8.85008 14.3749 10.0001 14.3749C11.1501 14.3749 12.0834 13.4416 12.0834 12.2916C12.0834 11.1416 11.1501 10.2083 10.0001 10.2083Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_771_3342">
          <rect width="20" height="20" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CommonCameraIcon;
