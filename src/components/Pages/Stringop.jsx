import { Box, Typography, Card, TextField, Button, Alert, CardContent } from "@mui/material";
import { useState } from "react";

const Stringop = () => {
  const [input, setInput] = useState("");
  const [errormessage, setErrormessage] = useState("");
  const [reversedString, setReversedString] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;

    if (/^[A-Za-z]*$/.test(value)) {
      setInput(value);
      setErrormessage("");
    } else {
      setErrormessage("Please enter alphabetic characters only.");
    }
  };

  //revers String
  const handleReverse = () => {
    if (input.trim() === "") {
      setErrormessage("Please enter a string.");
      return;
    }
    const res = input.split("").reverse().join("");
    setReversedString(res);
    console.log(res);
    setCharCount(input.length);
    setErrormessage("");
  };
  return (
    <Card
      sx={{
        maxWidth: 800,
        width: "100%",
        borderRadius: 4,
        boxShadow: 5,
        mt: 2,
      }}
    >
      <CardContent>
        <Box className="flex flex-col gap-4 p-4">
          <Typography variant="h4" align="center" fontWeight="bold">
            String Operations
          </Typography>

          <TextField
            fullWidth
            required
            label="Enter the String"
            value={input}
            onChange={handleChange}
          />
          <Button variant="contained" onClick={handleReverse}>
            Reverse_String
          </Button>

          {errormessage && (
            <Alert severity="error" variant="filled">
              {errormessage}
            </Alert>
          )}

          <Card
            sx={{ maxWidth: 800, width: "100%", borderRadius: 4, boxShadow: 5 }}
          >
            <CardContent>
              <Typography variant="h6">Reversed String:</Typography>
              <Typography className="text-emerald-500" variant="h5">
                {reversedString}
              </Typography>

              <Typography variant="h6" sx={{ mt: 2 }}>
                Character Count:
              </Typography>
              <Typography className="text-emerald-500 font-bold" variant="h5">
                {charCount}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </CardContent>
    </Card>
  );
};
export default Stringop;
