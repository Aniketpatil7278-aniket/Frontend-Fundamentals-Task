import { useState } from "react";
import { Alert, Container, Paper, Typography } from "@mui/material";

import EmployeeForm from "../EmployeeManagment/EmployeeForm"
import EmployeeTable from "../EmployeeManagment/EmployeeTable";
import SearchEmployee from "../EmployeeManagment/SearchEmployee";

const EmployeeManagement = () => {
  const [empdata, setEmpdata] = useState([]);

  const [search, setSearch] = useState("");

  const [editIndex, setEditIndex] = useState(null);


  const [message, setMessage] = useState("");


  const initialValue = {
    employeeId: "",
    employeeName: "",
    department: "",
    designation: "",
    salary: "",
  };

  const [currentEmployee, setCurrentEmployee] = useState(initialValue);

  const handleSubmit = (values, { resetForm }) => {

    const duplicateEmployee = empdata.find(
      (emp, index) =>
        emp.employeeId === values.employeeId && index !== editIndex,
    );

    if (duplicateEmployee) {
      setMessage("Employee ID already exists");
      return;
    }

    if (editIndex !== null) {
      const updatedEmployees = [...empdata];

      updatedEmployees[editIndex] = values;

      setEmpdata(updatedEmployees);
      setMessage("Employee Updated Successfully!");


      setEditIndex(null);
    } else {
      setEmpdata([...empdata, values]);
      setMessage("Employee Added Successfully!");

    }

    setCurrentEmployee(initialValue);

    resetForm();
  };

  const handleEdit = (index) => {
    setCurrentEmployee(empdata[index]);

    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedEmployees = empdata.filter((_, i) => i !== index);

    setEmpdata(updatedEmployees);
  };

  const filteredEmployees = empdata.filter((emp) =>
    emp.employeeName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={4} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Employee Management System
        </Typography>

        <EmployeeForm
          initialValues={currentEmployee}
          onSubmit={handleSubmit}
          editMode={editIndex !== null}
        />

        <SearchEmployee search={search} setSearch={setSearch} />
        {message && (
          <Alert variant="filled" severity="success" className="mb-2">
            {message}
          </Alert>
        )}

        <EmployeeTable
          employees={filteredEmployees}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Paper>
    </Container>
  );
};

export default EmployeeManagement;
