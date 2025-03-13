import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { HeadingFormGridPropsI } from "../Grids.interface";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";

export const HeadingFormGrid = (props: HeadingFormGridPropsI) => {
  const {
    formFieldsList = [],
    spacing = 2,
    rowSpacing = spacing,
    columnSpacing = spacing,
    disabled,
    children,
    lg = 12,
  } = props;

  return (
    <ContainerGridLayout
      spacing={spacing}
      rowSpacing={rowSpacing}
      columnSpacing={columnSpacing}
    >
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
          >
            {form?.heading ? form?.heading : null}
          </form.component>
        </ItemGridLayout>
      ))}
      {children}
    </ContainerGridLayout>
  );
};
