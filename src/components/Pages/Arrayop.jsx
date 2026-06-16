import NumArray from "../ArrayOp/NumArray";
import StringArray from "../ArrayOp/StringArray";

import { Box, Card, CardContent, Typography } from "@mui/material";

const Arrayop = () => {
  return (
    <>

      <Box className="flex flex-col md:flex-row gap-6 p-6 min-h-screen bg-gray-100">
        {/* Left Section */}
        <Card
          elevation={4}
          className="flex-1"
          sx={{
            borderRadius: "16px",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              fontWeight="bold"
              gutterBottom
            >
              Number Array Operations
            </Typography>

            <NumArray />
          </CardContent>
        </Card>

        {/* Right Section */}
        <Card
          elevation={4}
          className="flex-1"
          sx={{
            borderRadius: "16px",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              fontWeight="bold"
              gutterBottom
            >
              String Array Operations
            </Typography>

            <StringArray />
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Arrayop;
