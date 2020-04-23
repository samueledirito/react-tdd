import React from "react";
import { Formik, Form } from "formik";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import TextField from "formik/TextField";

const validationSchema = yup.object().shape({
  personName: yup.string().required(),
});

const PersonForm: React.FC<{ person?: any }> = ({
  person = { personName: "" },
}) => {
  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={console.log}
      initialValues={person}
    >
      {({ dirty, isValid }) => (
        <Form>
          <TextField
            label="Name"
            name="personName"
            data-testid="personName"
            placeholder="Name"
          />
          <Button type="submit" disabled={!dirty || !isValid}>
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default PersonForm;
