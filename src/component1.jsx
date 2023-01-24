import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Component1 = () => {
  return (
    <div>
      <div style={{ justifyContent: "center", textAlign: "center" }}>
        <h1>Welcome! First things first...</h1>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          You can always change them later.
        </Typography>
      </div>
      <br />

      <div
        style={{
          width: "100%",
          display: "block",
          justifyContent: "left",
          textAlign: "center",
        }}
      >
        <label>Full Name</label>
        <br />
        <TextField
          id="outlined-basic"
          placeholder="Full name"
          label="Full name"
          variant="outlined"
          
        />
      </div>
      <br />
      <div
        style={{
          
          width: "100%",
          display: "block",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <label>Display Name</label>
        <br />
        <TextField
          id="outlined-basic"
          placeholder="Display Name"
          label="Display name"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default Component1;
