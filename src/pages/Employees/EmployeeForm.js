import React from "react";
import { useForm, Form } from "../../components/useForm";
import { Controls } from "../../components/controls/Controls";
import { Grid } from "@material-ui/core";
import * as employeeService from "../../services/employeeService";

const genderItems = [
  { id: "male", title: "male" },
  { id: "female", title: "female" },
  { id: "other", title: "other" },
];
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
          <Controls.Input
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />

          <Controls.Input
            variant="outlined"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
          />
          <Controls.Input
            variant="outlined"
            name="city"
            label="City"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
          />
          <Controls.CheckBox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Form>
  );
}
