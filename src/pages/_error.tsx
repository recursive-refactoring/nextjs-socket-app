import { UIErrorState } from "@/components/ui-status-states/ui-error-state";
import { UI_MESSAGES } from "@/constants/messages";

export const NoPageFoundPage = () => {
  return (
    <UIErrorState
      hasButton
      message={UI_MESSAGES?.NOT_FOUND}
      height="100vh"
      buttonLink="/"
    />
  );
};

export default NoPageFoundPage;
