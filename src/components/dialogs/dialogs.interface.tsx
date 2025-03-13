import { ALERT_DIALOGS_TYPES } from "@/constants/alert-dialog";
import { ReactNode } from "react";

export interface CommonDrawerPropsI {
  isPortalOpen?: any;
  closePortal?: any;
  anchor?: "bottom" | "left" | "right" | "top";
  variant?: "permanent" | "persistent" | "temporary";
  drawerTitle?: ReactNode;
  drawerTitleColor?: string;
  disabledCancelButton?: boolean;
  showSubmitLoader?: boolean;
  handleSubmitButton?: any;
  handleCancelButton?: any;
  cancelButtonText?: ReactNode;
  submitButtonText?: ReactNode;
  showActionButtons?: boolean;
  disabledSubmitButton?: boolean;
  showCancelButton?: boolean;
  submitButtonStyles?: any;
  cancelButtonStyles?: any;
  isCapital?: boolean;
  canClose?: boolean;
  titlePosition?: string;
  submitBtnFull?: boolean;
  cancelBtnFull?: boolean;
  showSubmitButton?: boolean;
  children?: ReactNode;
}

export interface CommonDialogPropsI {
  isPortalOpen?: any;
  closePortal?: any;
  dialogTitle?: ReactNode;
  dialogMaxWidth?: any;
  drawerTitleColor?: string;
  disabledCancelButton?: boolean;
  showSubmitLoader?: boolean;
  handleSubmitButton?: any;
  handleCancelButton?: any;
  cancelButtonText?: ReactNode;
  submitButtonText?: ReactNode;
  showActionButtons?: boolean;
  disabledSubmitButton?: boolean;
  showCancelButton?: boolean;
  submitButtonStyles?: any;
  cancelButtonStyles?: any;
  isCapital?: boolean;
  canClose?: boolean;
  titlePosition?: string;
  submitBtnFull?: boolean;
  cancelBtnFull?: boolean;
  showSubmitButton?: boolean;
  children?: ReactNode;
  extraTitle?: ReactNode;
  isCenterContent?: boolean;
}

export interface AlertDialogPropsI {
  isPortalOpen?: any;
  type?: typeof ALERT_DIALOGS_TYPES;
  message?: ReactNode;
  cancelButtonText?: ReactNode;
  submitButtonText?: ReactNode;
  closePortal: any;
}
