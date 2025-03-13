import { useCallback, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { FILE_MAX_SIZE } from "@/configs/file";
import { maxFileSize } from "@/utils/avatars";
import { ARRAY_INDEX, SELECTED_ARRAY_LENGTH } from "@/constants/array";
import PreviewSingleFileUploaderAvatar from "@/components/avatars/preview-single-file-uploader-avatar";
import { FILE_SIZE_MESSAGES } from "@/constants/messages";
import { ACCEPT_FILE_EXTENSIONS } from "@/constants/file";
import { CommonFolderIcon } from "@/assets/icons/common";
import { BodyText } from "@/components/text/body-text";
import FieldLabel from "@/components/input-fields/field-label";
import { AddNewItemButton } from "@/components/buttons/add-new-item-button";
import { ErrorMessageField } from "../../error-message-field";

export const SingleFileUploadField = (props: any) => {
  const {
    name,
    required,
    accept = {
      "image/png": ACCEPT_FILE_EXTENSIONS?.PNG,
      "image/jpeg": ACCEPT_FILE_EXTENSIONS?.JPEG,
    },
    maxSize = FILE_MAX_SIZE?.ATTACH_FILE_MAX_SIZE,
    isPreviewMode = false,
    attachmentPreviewDetail = {},
    disabled,
    ...other
  } = props;

  const {
    setValue,
    getValues,
    formState: { errors },
  }: any = useFormContext();

  const onDrop = useCallback(
    (files: any) => {
      if (files && files?.length > SELECTED_ARRAY_LENGTH?.ZERO) {
        setValue(name, files?.[ARRAY_INDEX?.ZERO]);
      }
    },
    [setValue, name],
  );

  const { getRootProps, getInputProps, fileRejections, acceptedFiles } =
    useDropzone({
      multiple: false,
      accept,
      disabled,
      maxSize,
      onDrop,
    });

  const attachedFile = useMemo(() => {
    return acceptedFiles?.[ARRAY_INDEX?.ZERO] || getValues(name);
  }, [acceptedFiles, getValues(name), name]);

  if (isPreviewMode)
    return (
      <>
        {other?.label && (
          <FieldLabel label={other?.label} required={required} />
        )}
        <Box
          onClick={undefined}
          sx={{
            border: "1px solid",
            borderRadius: 2,
            padding: 2,
            textAlign: "center",
            cursor: "pointer",
            borderColor: "custom.off_white_three",
          }}
        >
          <PreviewSingleFileUploaderAvatar
            size={{ width: 60, height: 60 }}
            hasStyling={false}
            canDelete={false}
            data={attachmentPreviewDetail}
            flexDirection={"column"}
          />
        </Box>
      </>
    );

  return (
    <>
      <input {...getInputProps()} id={name} />
      {other?.label && <FieldLabel label={other?.label} required={required} />}
      <label htmlFor={name}>
        <Box
          {...getRootProps()}
          onClick={undefined}
          sx={{
            border: "1px solid",
            borderRadius: 2,
            padding: 2,
            textAlign: "center",
            cursor: "pointer",
            borderColor: "custom.off_white_three",
          }}
        >
          {!!attachedFile ? (
            <PreviewSingleFileUploaderAvatar
              setValue={setValue}
              attachedFile={attachedFile}
              name={name}
            />
          ) : (
            <>
              <CommonFolderIcon />
              <BodyText> Drag & Drop File Here OR</BodyText>
              <AddNewItemButton hasEndIcon>Browse Files</AddNewItemButton>
            </>
          )}
        </Box>
      </label>

      {!!errors?.[name] && !!!getValues(name)?.name && (
        <ErrorMessageField>{errors?.[name]?.message}</ErrorMessageField>
      )}

      {!!fileRejections?.length &&
        fileRejections?.map((fileError: any, index: any) => (
          <Typography
            variant="body2"
            color="error"
            key={fileError?.code?.[index]}
            sx={{ wordBreak: "break-all" }}
          >
            {fileError?.errors?.some(
              (err: any) => err?.code === FILE_SIZE_MESSAGES?.FILE_TOO_LARGE,
            )
              ? `File size should be less than ${maxFileSize(maxSize)}`
              : `${fileError?.errors[ARRAY_INDEX?.ZERO]?.message}`}
          </Typography>
        ))}
    </>
  );
};

export default SingleFileUploadField;
