import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Form, Formik } from "formik";
import { validationSchema } from "../EmployeeManagment/Validation";

const EmployeeForm = ({ initialValues, onSubmit, editMode }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur, touched, errors }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Employee ID"
                name="employeeId"
                value={values.employeeId}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.employeeId && Boolean(errors.employeeId)}
                helperText={touched.employeeId && errors.employeeId}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Employee Name"
                name="employeeName"
                value={values.employeeName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.employeeName && Boolean(errors.employeeName)}
                helperText={touched.employeeName && errors.employeeName}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Department"
                name="department"
                value={values.department}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.department && Boolean(errors.department)}
                helperText={touched.department && errors.department}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Designation"
                name="designation"
                value={values.designation}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.designation && Boolean(errors.designation)}
                helperText={touched.designation && errors.designation}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Salary"
                name="salary"
                value={values.salary}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.salary && Boolean(errors.salary)}
                helperText={touched.salary && errors.salary}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Button fullWidth variant="contained" type="submit">
                {editMode ? "Update Employee" : "Add Employee"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default EmployeeForm;
