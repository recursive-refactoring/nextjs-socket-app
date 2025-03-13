import { SwitchField } from "@/components/input-fields/switch-field";
import { Controller, useFormContext } from "react-hook-form";

const SwitchFormField = (props: any) => {
  const { name, label, disabled = false } = props;
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <SwitchField
            name={field?.name}
            checked={field?.value}
            onChange={field?.onChange}
            label={label}
            ariaLabel={name}
            disabled={disabled}
          />
        );
      }}
    />
  );
};

export default SwitchFormField;
