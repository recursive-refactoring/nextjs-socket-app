import { FormControlLabel, Switch, useTheme } from "@mui/material";
import { CommonCircularProgress } from "@/components/progress-bars/common-circular-progress";
import FieldLabel from "../field-label";

export const SwitchField = (props: any) => {
  const {
    isLoading,
    required,
    checked,
    onChange,
    label,
    name = label,
    id = name,
    ariaLabel = label,
    disabled = false,
  } = props;

  if (isLoading) return <CommonCircularProgress />;

  const theme = useTheme();

  return (
    <FormControlLabel
      control={
        <Switch
          color={"primary"}
          name={name}
          checked={checked}
          onChange={onChange}
          id={id}
          disabled={disabled}
          sx={{
            width: 36,
            height: 20,
            padding: 0,
            marginRight: "10px",
            display: "flex",
            "&:active": {
              "& .MuiSwitch-thumb": {
                width: 18,
              },
              "& .MuiSwitch-switchBase.Mui-checked": {
                transform: "translateX(9px)",
              },
            },
            "& .MuiSwitch-switchBase": {
              padding: 0.2,
              "&.Mui-checked": {
                transform: "translateX(15px)",
                color: "white",
                "& + .MuiSwitch-track": {
                  opacity: 1,
                },
              },
            },
            "& .MuiSwitch-thumb": {
              boxShadow: 1,
              width: 16,
              height: 16,
              borderRadius: "50%",
              transition: theme?.transitions?.create(["width"], {
                duration: 200,
              }),
            },
            "& .MuiSwitch-track": {
              borderRadius: 12,
              opacity: 1,
              boxSizing: "border-box",
            },
          }}
          slotProps={{
            input: {
              "aria-label": ariaLabel,
            },
          }}
        />
      }
      label={
        !!label && (
          <label htmlFor={name}>
            <FieldLabel label={label} required={required} marginBottom={0} />
          </label>
        )
      }
    />
  );
};
