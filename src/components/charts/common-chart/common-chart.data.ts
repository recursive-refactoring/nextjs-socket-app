import { alpha } from "@mui/material";

export const labelXYStyles = {
  style: {
    fontSize: "14px",
    fontWeight: 400,
    colors: "#A0A3BD",
  },
};

export const cssStyles = (theme: any) => {
  return {
    bgBlur: (props?: any) => {
      const color = props?.color ?? theme?.palette?.background?.default;
      const blur = props?.blur ?? 6;
      const opacity = props?.opacity ?? 0.8;

      return {
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: alpha(color, opacity),
      };
    },
  };
};

export const barOptionsDynamic = (
  type: any,
  {
    chart,
    grid,
    plotOptions,
    xaxis,
    yaxis,
    fill,
    dataLabels,
    stroke,
    legend,
    ...restOptions
  }: any,
): any => ({
  chart: {
    type: type,
    toolbar: { show: false },
    zoom: {
      enabled: false,
    },
    ...chart,
  },
  grid: {
    show: true,
    borderColor: "#D9DBE9",
    strokeDashArray: 7,
    ...grid,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
    ...plotOptions,
  },
  xaxis: {
    labels: {
      ...labelXYStyles,
      ...xaxis?.labels,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    ...xaxis,
  },
  yaxis: {
    labels: {
      ...labelXYStyles,
    },
    ...yaxis,
  },
  fill: {
    opacity: 1,
    ...fill,
  },
  dataLabels: {
    enabled: false,
    ...dataLabels,
  },
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
    ...stroke,
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    position: "bottom",
    markers: {
      width: 12,
      height: 12,
      radius: 12,
      ...legend?.markers,
    },
    ...legend,
  },
  ...restOptions,
});
