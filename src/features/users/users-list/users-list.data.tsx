import { SingleDropdownIconButton } from "@/components/buttons/single-dropdown-icon-button";
import { USER_DROPDOWN_MENU_LIST } from "../users.data";

export const usersListActionDropdownDynamic = [
  {
    id: 1,
    title: USER_DROPDOWN_MENU_LIST?.ROLES_AND_RIGHT,
  },
  {
    id: 2,
    title: USER_DROPDOWN_MENU_LIST?.EDIT,
  },
  {
    id: 3,
    title: USER_DROPDOWN_MENU_LIST?.DELETE,
  },
];

export const usersListColumnsDynamic = (handleDropdownItemsClick: any) => {
  return [
    {
      id: "srNo",
      accessorKey: "srNo",
      header: "sr. No.",
      cell: (info: any) => info?.getValue(),
    },
    {
      id: "user",
      accessorKey: "user",
      header: "User",
      cell: (info: any) => info?.getValue(),
    },
    {
      id: "email",
      accessorKey: "email",
      header: "Business Email",
      cell: (info: any) => info?.getValue(),
    },
    {
      id: "phoneNo.",
      accessorKey: "phoneNo.",
      header: "Phone No.",
      cell: (info: any) => info?.getValue(),
    },
    {
      id: "role",
      accessorKey: "role",
      header: "Role",
      cell: (info: any) => info?.getValue(),
    },
    {
      id: "status",
      accessorKey: "status",
      header: "Status",
      cell: (info: any) => info?.getValue(),
    },
    {
      id: "actions",
      accessorKey: "actions",
      header: "Actions",
      cell: () => (
        <SingleDropdownIconButton
          dropdownOptions={usersListActionDropdownDynamic}
          handleSingleClick={handleDropdownItemsClick}
        />
      ),
    },
  ];
};
