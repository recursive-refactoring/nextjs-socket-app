export const useNotificationsFeature = (props: any) => {
  const { setIsPortalOpen } = props;

  const closePortal = () => setIsPortalOpen(false);

  return {
    closePortal,
  };
};
