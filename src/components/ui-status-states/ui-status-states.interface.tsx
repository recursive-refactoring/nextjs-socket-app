import { ReactNode } from "react";

export interface UiNoPageFoundStatePropsI {
  hasImage?: boolean;
  image?: any;
  message?: string;
  children?: ReactNode;
  height?: string;
  buttonLink?: string;
  hasButton?: boolean;
  buttonText?: string;
}
