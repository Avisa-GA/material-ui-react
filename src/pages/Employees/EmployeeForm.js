import { Grid, TextField } from "@material-ui/core";
import React from "react";
import { useForm, Form } from "../../components/useForm";

const initialsFValues = {
  id: 0,
  fullName: "",
  email: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployeeForm() {
  const { values, setValues, handleInputChange } = useForm(initialsFValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            name="city"
            label="City"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Form>
  );
}
