import { ReactNode } from "react";

export interface FormGridPropsI {
  formFieldsList: any[];
  spacing?: any;
  disabled?: boolean;
  lg?: number;
  children?: ReactNode;
}

export interface HeadingFormGridPropsI {
  formFieldsList: any[];
  spacing?: number;
  rowSpacing?: number;
  columnSpacing?: number;
  disabled?: boolean;
  lg?: number;
  children?: ReactNode;
}

export interface ListGridPropsI {
  list: any[];
  render: any;
  spacing?: number;
  disabled?: boolean;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}
