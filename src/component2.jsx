import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Component2 = () => {
  return (
    <div>
      <div style={{ justifyContent: "center", textAlign: "center" }}>
        <h1>Lets setup a home for all your work</h1>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          You can always create another workspace later
        </Typography>
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
        <label>Workspace Name</label>
        <br />
        <TextField
          id="outlined-basic"
          placeholder="Workspace Name"
          label="Workspace Name"
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
        <label>Workspace URL</label>
        <br />
        <TextField
          id="outlined-basic"
          placeholder="Workspace URL"
          label="Workspace URL"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default Component2;
