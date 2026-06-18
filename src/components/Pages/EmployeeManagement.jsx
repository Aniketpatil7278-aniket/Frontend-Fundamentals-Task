import { useState } from "react";
import { Container, Paper, Typography } from "@mui/material";

import EmployeeForm from "../EmployeeManagment/EmployeeForm"
import EmployeeTable from "../EmployeeManagment/EmployeeTable";
import SearchEmployee from "../EmployeeManagment/SearchEmployee";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);

  const [search, setSearch] = useState("");

  const [editIndex, setEditIndex] = useState(null);



  const emptyEmployee = {
    employeeId: "",
    employeeName: "",
    department: "",
    designation: "",
    salary: "",
  };

  const [currentEmployee, setCurrentEmployee] = useState(emptyEmployee);

  const handleSubmit = (values, { resetForm }) => {
    const duplicateEmployee = employees.find(
      (emp, index) =>
        emp.employeeId === values.employeeId && index !== editIndex,
    );

    if (duplicateEmployee) {
      alert("Employee ID already exists");
      return;
    }

    if (editIndex !== null) {
      const updatedEmployees = [...employees];

      updatedEmployees[editIndex] = values;

      setEmployees(updatedEmployees);

      setEditIndex(null);
    } else {
      setEmployees([...employees, values]);
    }

    setCurrentEmployee(emptyEmployee);

    resetForm();
  };

  const handleEdit = (index) => {
    setCurrentEmployee(employees[index]);

    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);

    setEmployees(updatedEmployees);
  };

  const filteredEmployees = employees.filter((emp) =>
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
