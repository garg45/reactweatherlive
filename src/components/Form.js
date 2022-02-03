import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Tempapp from "./Tempapp";
import "./css/style.css";
import Inputcontext from "./store/ContextApi";

const Form = () => {
  const ctx = useContext(Inputcontext);
  const [btn, setBtn] = useState(false);

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {!btn ? (
          <>
            <TextField
              id="standard-basic"
              label="City Name"
              value={ctx.name}
              variant="standard"
              onChange={(e) => {
                ctx.addInput(e.target.value);
              }}
            />
            <Button variant="contained" onClick={()=>{setBtn(true)}}>
              Get Weather
            </Button>
          </>
        ) : (
          ""
        )}
        {btn ? <Tempapp/> : ""}
      </Box>
    </>
  );
};

export default Form;
