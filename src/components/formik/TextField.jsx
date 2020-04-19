import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core";
import { default as MUITextField } from "@material-ui/core/TextField";
import { useField } from "formik";

const useStyles = makeStyles(() => ({
  field: {
    margin: "8px 0",
  },
}));

const TextField = ({ name, ...props }) => {
  const classes = useStyles();

  const [field, meta] = useField(name);
  const isInError = Boolean(meta.error) && Boolean(meta.touched);
  return (
    <MUITextField
      className={classes.field}
      error={isInError}
      helperText={isInError && meta.error}
      {...field}
      {...props}
    />
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TextField;
