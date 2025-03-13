import UiNoPageFoundState from "@/components/ui-status-states/ui-no-page-found-state";
import { UI_MESSAGES } from "@/constants/messages";

export const NoPageFoundPage = () => {
  return (
    <UiNoPageFoundState
      hasButton
      message={UI_MESSAGES?.NOT_FOUND}
      height="100vh"
      buttonLink="/"
    />
  );
};

export default NoPageFoundPage;
