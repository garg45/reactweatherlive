import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Tempapp from "./Tempapp";
import './css/style.css'

const Form = () => {
  const [search, setSearch] = useState("");
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
        <TextField
          id="standard-basic"
          label="City Name"
          value={search}
          variant="standard"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />{!btn?
        <Button
          variant="contained"
          onClick={() => {
            setBtn(true);
          }}
        >
          Get Weather
        </Button>:""}
        {btn ? <Tempapp search={search} /> : ""}
      </Box>
    </>
  );
};

export default Form;
