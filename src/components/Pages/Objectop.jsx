import {
  Typography,
  Card,
  CardContent,
  TextField,
  Stack,
  Button,
  Alert,
} from "@mui/material";
import { useState } from "react";


const Objectop=()=>{

    const [emp, setEmp] = useState({
      id: 101,
      name: "John",
      department: "IT",
      salary: 50000,
    });

    const [propertyName, setPropertyName] = useState("");
    const [propertyValue, setPropertyValue] = useState("");
    const [errormessage, setErrormessage] = useState("");

    //ADD
    const handleAdd=()=>{
        if(!propertyName || !propertyValue){
            setErrormessage("Please enter property name and value");
            return;
        }
        setEmp({
            ...emp,
            [propertyName]:propertyValue
        });
        setPropertyName("");
        setPropertyValue("");
        setErrormessage("");
        alert("Value Added")
    };

    //update 
    const handleUpdate=()=>{
        if(!propertyName || !propertyValue){
            setErrormessage("Please enter property name and value");
            return;
        }
        if(!(propertyName in emp)){
            setErrormessage("Property does not exist");
            return;
        }
        setEmp({
            ...emp,
            [propertyName]: propertyValue,
        });
        setPropertyName("");
        setPropertyValue("");
        setErrormessage("");
        alert("value updated..");
    };

    //delete
    const handleDelete=()=>{
        if(!propertyName){
            setErrormessage("Please enter property");
            return;
        }

        const update = {...emp};
        delete update[propertyName];
        setEmp(update);
        setPropertyName("");
        setErrormessage("");
        alert("delete the property..");
    }

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
          <Typography variant="h4" align="center" fontWeight="bold">
            Object Operations
          </Typography>

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
              <Typography variant="h6">Employee Details</Typography>
              {Object.entries(emp).map(([key, value]) => (
                <Typography key={key}>
                  <strong>{key} : </strong> {value}
                </Typography>
              ))}
            </CardContent>
          </Card>

          {/* Object Keys */}
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
              <Typography variant="h6">Object Key:</Typography>

              <Typography>{Object.keys(emp).join(", ")}</Typography>
            </CardContent>
          </Card>

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
              <Typography variant="h6">Object Values:</Typography>

              <Typography>{Object.values(emp).join(", ")}</Typography>
            </CardContent>
          </Card>
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
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="Property Name"
                  value={propertyName}
                  onChange={(e) => setPropertyName(e.target.value)}
                />

                <TextField
                  fullWidth
                  label="Property Value"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(e.target.value)}
                />

                {errormessage && (
                  <Alert severity="error" variant="filled">
                    {errormessage}
                  </Alert>
                )}

                <Button
                  variant="contained"
                  color="success"
                  onClick={handleAdd}
                >
                  Add Property
                </Button>

                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleUpdate}
                >
                  Update Property
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  onClick={handleDelete}
                >
                  Delete Property
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    );
};
export default Objectop;