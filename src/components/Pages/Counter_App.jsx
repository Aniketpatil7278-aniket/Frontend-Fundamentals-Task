import { useState } from "react";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
const Counter_App =()=>{
  const [count, setCount] = useState(0);

  //increment
  const incrementHandler = () => {
    setCount((value) => value + 1);
  };

  //Decrement
  const decrementHandler = () => {
    if (count > 0) {
      setCount((value) => value - 1);
    }
  };

  const resetHandler = () => {
    setCount(0);
  };
  return (
    <>
      <div className="min-h-[calc(100vh-64px)] flex justify-center items-center bg-gray-100">
        <Card
          sx={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "20px",
            boxShadow: 5,
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              fontWeight="bold"
            >
              Counter Application
            </Typography>

            <Typography
              variant="h2"
              align="center"
              color="primary"
              fontWeight="bold"
              sx={{ my: 4 }}
            >
              {count}
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                color="success"
                fullWidth
                onClick={incrementHandler}
              >
                Increment
              </Button>

              <Button
                variant="contained"
                fullWidth
                color="warning"
                onClick={decrementHandler}
              >
                Decrement
              </Button>

              <Button
                variant="contained"
                fullWidth
                color="error"
                onClick={resetHandler}
              >
                Rest Value
              </Button>
            </Stack>

            {count === 0 && (
              <Typography align="center" color="error" className="p-3 mt-2">
                Counter cannot go below 0
              </Typography>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
export default Counter_App;