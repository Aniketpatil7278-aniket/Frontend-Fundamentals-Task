import { Alert, Box, Button,Card,CardContent,Stack,TextField, Typography } from "@mui/material";
import { useState } from "react";
const NumArray =()=>{
  const [input, setInput] = useState("");
  const [arraydata, setArraydata] = useState([]);
  const [errormessage, setErrormessage] = useState("");

  const [newElement, setNewElement] = useState("");

  //function for the onchahge
  const handleChange = (e) => {
    const value = e.target.value;

    if (/^[0-9,.-]*$/.test(value)) {
      setInput(value);
      setErrormessage("");
    }
  };

  //submit the array
  const handleSubmit = () => {
    if (input.trim() === "") {
      setErrormessage("Please Enter Number");
      return;
    }
    const arr = input.split(",").map((item) => Number(item.trim()));
    setArraydata(arr);
    console.log(arr);
  };

  //add the element function
  const handleAddElement = () => {
    if (newElement.trim() === "") {
      alert("Please Enter the Element");
      return;
    }
    if (isNaN(newElement)) {
      alert("Only numbers are allowed");
      return;
    }
    setArraydata([...arraydata, Number(newElement)]); // convert the array ele in number
    setNewElement("");
  };

  //array sort Ascendeing order
  const sortAscending = () => {
    const sortedArray = [...arraydata].sort((a, b) => a - b);
    setArraydata(sortedArray);
  };

  // array sort sortDescending
  const sortDescending = () => {
    const sortedArray = [...arraydata].sort((a, b) => b - a);
    setArraydata(sortedArray);
  };

  //array reverse
  const reverseArray = () => {
    const res = [...arraydata].reverse();
    setArraydata(res);
  };

  //maxNumber in  a array
   const maxNumber = arraydata.length > 0 ? Math.max(...arraydata) : "-";

   const minNumber = arraydata.length > 0 ? Math.min(...arraydata) : "-";


  return (
    <Box className="flex flex-col gap-4 ">
      <TextField
        fullWidth
        required
        label="Enter the Array"
        value={input}
        onChange={handleChange}
        placeholder="Example:-->10,20,30"
      />

      <Button variant="contained" onClick={handleSubmit}>
        show Array
      </Button>

      {errormessage && (
        <Alert variant="filled" severity="error" sx={{ mb: 2 }}>
          {errormessage}
        </Alert>
      )}

      <Card
        sx={{ maxWidth: 800, width: "100%", borderRadius: 4, boxShadow: 5 }}
      >
        <CardContent>
          <TextField
            fullWidth
            label="Add the Element"
            value={newElement}
            onChange={(e) => setNewElement(e.target.value)}
            placeholder="Enter the Element"
          />

          <Button variant="contained" sx={{ mt: 2 }} onClick={handleAddElement}>
            Add Element
          </Button>
        </CardContent>
      </Card>

      <Card
        sx={{ maxWidth: 800, width: "100%", borderRadius: 4, boxShadow: 5 }}
      >
        <CardContent>
          <Typography>Result is :--</Typography>

          <Typography className="text-emerald-500">
            {arraydata.join(", ")}
          </Typography>
        </CardContent>
      </Card>

      <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ mb: 3 }}>
        <Button variant="contained" color="success" onClick={sortAscending}>
          Sort Asc
        </Button>

        <Button variant="contained" color="warning" onClick={sortDescending}>
          Sort Dse
        </Button>

        <Button variant="contained" color="error" onClick={reverseArray}>
          Reverse
        </Button>
      </Stack>
      <Card
        sx={{ maxWidth: 800, width: "100%", borderRadius: 4, boxShadow: 5 }}
      >
        <CardContent>
          <Typography variant="h5">Max Number: {maxNumber}</Typography>

          <Typography variant="h5">Min Number: {minNumber}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
export default NumArray;