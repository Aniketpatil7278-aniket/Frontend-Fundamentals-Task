import { Box, TextField } from "@mui/material";

const SearchEmployee = ({ search, setSearch }) => {
  return (
    <Box sx={{ my: 4 }}>
      <TextField
        fullWidth
        label="Search Employee by Name"
        placeholder="Enter employee name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  );
};

export default SearchEmployee;
