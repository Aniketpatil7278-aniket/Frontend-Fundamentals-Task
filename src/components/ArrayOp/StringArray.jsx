
import { Box, Button, TextField ,Alert, Card, CardContent,Stack, Typography} from "@mui/material";
import { useState } from "react";
const StringArray = () => {
  const [input, setInput] = useState("");
  const [stringarray, setStringarray] = useState([]);
  const [errormessage, setErrormessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    if (/^[A-Za-z\s]*$/.test(value)) {
      setInput(value);
      setErrormessage("");
    } else {
      setErrormessage(
        "Only alphabetic values are allowed. Numbers and special characters are not allowd.",
      );
    }
  };

  const handleAddString = () => {
    if (input.trim() === "") {
      setErrormessage("Please enter a string value.");
      return;
    }
    setStringarray([...stringarray, input.trim()]);
    setInput("");
    setErrormessage("");
  };

  //sort A_Z
  const sortAscending = () => {
    const sort = [...stringarray].sort((a, b) => a.localeCompare(b));
    setStringarray(sort);
  };

  //sort Z-A
  const sortDescending = () => {
    const sort = [...stringarray].sort((a, b) => b.localeCompare(a));
    setStringarray(sort);
  };

  //reverseArray
  const reverseArray = () => {
    setStringarray([...stringarray].reverse());
  };

  //First Item  
 const firstItem =
    stringarray.length > 0
      ? [...stringarray].sort((a, b) => a.localeCompare(b))[0]
      : "NO DATA";

  //lastItem
  const sortedArray = [...stringarray].sort((a, b) => a.localeCompare(b));

  const lastItem=
    sortedArray.length >0
    ? sortedArray[sortedArray.length-1]
    : "NO DATA";

  return (
    <Box className="flex flex-col gap-4 ">
      <TextField
        fullWidth
        required
        label="Enter the Array Straing"
        value={input}
        onChange={handleChange}
      />

      <Button variant="contained" onClick={handleAddString}>
        ADD String
      </Button>
      {errormessage && (
        <Alert severity="error" variant="filled">
          {" "}
          {errormessage}{" "}
        </Alert>
      )}

      <Card
        sx={{ maxWidth: 800, width: "100%", borderRadius: 4, boxShadow: 5 }}
      >
        <CardContent>
          <Typography variant="h6">Entered Array is :</Typography>
          <Typography className="text-emerald-500">
            {stringarray.length > 0 ? stringarray.join(", ") : "NO DATA"}
          </Typography>
        </CardContent>
      </Card>

      <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ mb: 3 }}>
        <Button variant="contained" color="success" onClick={sortAscending}>
          Sort A-Z
        </Button>

        <Button variant="contained" color="warning" onClick={sortDescending}>
          Sort Z-A
        </Button>

        <Button variant="contained" color="error" onClick={reverseArray}>
          Reverse
        </Button>
      </Stack>

      <Card
        sx={{ maxWidth: 800, width: "100%", borderRadius: 4, boxShadow: 5 }}
      >
        <CardContent>
          <Typography variant="h5">
            First Item After Sorting: {firstItem}
          </Typography>

          <Typography variant="h5">
            Last Item After Sorting:{lastItem}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StringArray