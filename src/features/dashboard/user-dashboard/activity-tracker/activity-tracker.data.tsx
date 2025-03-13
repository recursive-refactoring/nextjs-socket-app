export const activityTrackerDataDynamic = (data: any) => [
  {
    _id: 1,
    name: "Product View",
    infoColor: "error.main",
    info: data?.["name"] ?? "40",
    extraInfo: "+",
  },
  {
    _id: 2,
    name: "Buying frequency",
    infoColor: "info.main",
    info: "20",
    extraInfo: "",
  },
  {
    _id: 3,
    name: "In Cart",
    infoColor: "warning.main",
    info: "06",
    extraInfo: "",
  },
  {
    _id: 4,
    name: "Order status",
    infoColor: "success.main",
    info: "Active",
    extraInfo: "",
  },
];
