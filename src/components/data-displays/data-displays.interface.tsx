import { ReactNode } from "react";

export interface LogInfoPropsI {
  performer?: string;
  logType?: string;
  log?: ReactNode;
  logProps?: any;
  logColor?: string;
}
