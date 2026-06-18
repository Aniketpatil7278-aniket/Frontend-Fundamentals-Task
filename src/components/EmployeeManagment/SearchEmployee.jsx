import { TextField } from "@mui/material";

const SearchEmployee = ({ search, setSearch }) => {
  return (
    <TextField
      fullWidth
      label="Search Employee By Name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      sx={{ mb: 3 }}
    />
  );
};

export default SearchEmployee;
