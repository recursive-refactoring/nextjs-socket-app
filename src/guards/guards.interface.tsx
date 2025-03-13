import { ReactNode } from "react";

export interface PermissionGuardI {
  children: ReactNode;
  permissions: any;
}

export interface AuthGuardI {
  children: ReactNode;
}
