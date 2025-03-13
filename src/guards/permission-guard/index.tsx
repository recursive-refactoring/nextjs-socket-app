import { checkPermissions } from "@/utils/array-transformation";
import { PermissionGuardI } from "../guards.interface";

export default function PermissionsGuard(props: PermissionGuardI) {
  const { permissions, children } = props;
  const availablePermissions: any = [];

  const permissionsCheck = checkPermissions(availablePermissions, permissions);

  if (!permissionsCheck) return null;

  return <>{children}</>;
}
