import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Component4 = () => {
  return (
    <div>
      <CheckCircleIcon sx={{ fontSize: 120, color: "#8057d7" }} />
      <h1>Congratulations, Eren!</h1>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Write better think more clearly Stay organised
      </Typography>
    </div>
  );
};

export default Component4;
