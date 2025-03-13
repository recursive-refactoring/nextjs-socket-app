import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { FormGridPropsI } from "../Grids.interface";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";

export const FormGrid = (props: FormGridPropsI) => {
  const {
    formFieldsList = [],
    spacing = 2,
    disabled,
    children,
    lg = 12,
  } = props;

  return (
    <ContainerGridLayout spacing={spacing}>
      {formFieldsList?.map((form: any) => (
        <ItemGridLayout
          xs={12}
          lg={form?.lg ?? lg}
          key={form?._id}
          customStyles={form?.gridSx}
        >
          <form.component
            {...form?.componentProps}
            size={"small"}
            disabled={form?.componentProps?.disabled || disabled}
          />
        </ItemGridLayout>
      ))}
      {children}
    </ContainerGridLayout>
  );
};
