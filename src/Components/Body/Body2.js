import React from "react";
import "./body.scss";
import { Container, Typography, Button } from "@mui/material";

export default function bodyPage2() {
  return (
    <div className="bodyPage2">
      <Container>
        <Typography fontWeight="700" variant="body1" align="center">
          Biznes problemiz biza <br /> <span>etibor</span> edin!
        </Typography>
        <Typography variant="body2" align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
          nisl <br />
          <Button variant="contained" align="center" color="success">
            Click
          </Button>
        </Typography>
      </Container>
    </div>
  );
}
