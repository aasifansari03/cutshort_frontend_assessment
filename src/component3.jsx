import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Component3 = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <Card sx={{ minWidth: 275, maxWidth: 300, margin: "50px" }}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography variant="h5" component="div">
            For myself
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Write better think more clearly Stay organised
          </Typography>
        </CardContent>
        <CardActions>{/* <Button size="small">Select</Button> */}</CardActions>
      </Card>

      <Card sx={{ minWidth: 275, maxWidth: 300, margin: "50px" }}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography variant="h5" component="div">
            With my team
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Wikis docs tasks projects all in one place
          </Typography>
        </CardContent>
        <CardActions>{/* <Button size="small">Select</Button> */}</CardActions>
      </Card>
    </div>
  );
};

export default Component3;
