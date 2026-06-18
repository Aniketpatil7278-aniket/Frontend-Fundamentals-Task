
import * as Yup from "yup";

export const validationSchema = Yup.object({
  employeeId: Yup.string().required("Employee ID is required"),

  employeeName: Yup.string().required("Employee Name is required"),

  department: Yup.string().required("Department is required"),

  designation: Yup.string().required("Designation is required"),

  salary: Yup.number()
    .typeError("Salary must be numeric")
    .required("Salary is required")
    .positive("Salary must be positive"),
});
