import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const useFormLib = (props: any) => {
  const { defaultValues = {}, validationSchema } = props;

  const methods = useForm({
    defaultValues,
    ...(validationSchema
      ? {
          resolver: yupResolver(validationSchema),
        }
      : {}),
  });

  const {
    reset,
    handleSubmit,
    getValues,
    setError,
    setValue,
    watch,
    control,
    clearErrors,
    register,
    trigger,
  } = methods;

  return {
    methods,
    reset,
    handleSubmit,
    getValues,
    setError,
    setValue,
    watch,
    control,
    clearErrors,
    register,
    trigger,
  };
};
