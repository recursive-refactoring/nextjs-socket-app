import SingleAutocompleteField from "@/components/input-fields/single-autocomplete-field";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

const SingleAutocompleteAsyncFormField = (props: any) => {
  const {
    name,
    label,
    options,
    required,
    noOptionsText = "Nothing in the List",
    placeholder,
    freeSolo = false,
    endAdornment = false,
    onChangeHandler,
    isOptionEqualToValue = (option: any, newValue: any) =>
      option?._id === newValue?._id,
    getOptionLabel = (option: any) => option?.label,
    groupBy = (option: any) => option?.groupBy,
    apiQuery,
    queryKey = "search",
    externalParams,
  } = props;

  const { control } = useFormContext();
  const [open, setOpen] = useState(false);
  const [trigger, { data, isLoading, isFetching }]: any = apiQuery;

  const triggerDebounce = debounce((newInputValue: any) => {
    trigger({
      params: {
        [queryKey]: newInputValue?.length ? newInputValue : undefined,
        ...externalParams,
      },
    });
  });

  const onChanged = (e: any, newValue: any, onChange: any) => {
    onChangeHandler?.(e, newValue, onChange);
    onChange(newValue);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <SingleAutocompleteField
            name={field?.name}
            value={field?.value ?? null}
            onChange={(e: any, newValue: any) => {
              onChanged(e, newValue, field?.onChange);
            }}
            onBlur={field?.onBlur}
            onOpen={() => {
              setOpen(true);
              trigger({ params: { ...externalParams } });
            }}
            onClose={() => {
              setOpen(false);
            }}
            onInputChange={(event: any, newInputValue: any) => {
              triggerDebounce(newInputValue);
            }}
            options={isLoading || isFetching ? [] : (data ?? [])}
            loading={isLoading || isFetching}
            noOptionsText={noOptionsText}
            groupBy={groupBy}
            freeSolo={freeSolo}
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={isOptionEqualToValue}
            id={name}
            label={label}
            error={!!error}
            placeholder={placeholder}
            required={required}
            errorMessage={error?.message}
            endAdornment={endAdornment}
          />
        );
      }}
    />
  );
};

export default SingleAutocompleteAsyncFormField;
