import React from "react";
import PropTypes from "prop-types";

import {
  default as MUITextField,
  TextFieldProps as MuiTextFieldProps,
} from "@material-ui/core/TextField";
import { useField } from "formik";

type TextFieldProps = MuiTextFieldProps & { name: string; helperText?: string };

const TextField: React.FC<TextFieldProps> = ({
  name,
  helperText,
  ...props
}) => {
  const [field, meta] = useField(name);
  const isInError = Boolean(meta.error) && Boolean(meta.touched);
  return (
    <MUITextField
      variant="filled"
      error={isInError}
      helperText={isInError ? meta.error : helperText}
      {...field}
      {...props}
    />
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TextField;
