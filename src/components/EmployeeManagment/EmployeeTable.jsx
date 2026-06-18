import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {employees.length > 0 ? (
            employees.map((emp, index) => (
              <TableRow key={index}>
                <TableCell>{emp.employeeId}</TableCell>

                <TableCell>{emp.employeeName}</TableCell>

                <TableCell>{emp.department}</TableCell>

                <TableCell>{emp.designation}</TableCell>

                <TableCell>{emp.salary}</TableCell>

                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button variant="outlined" onClick={() => onEdit(index)}>
                      Edit
                    </Button>

                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => onDelete(index)}
                    >
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">
                No Employee Found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
