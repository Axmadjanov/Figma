import React from "react";
import "./body.scss";
import { Container, Typography, Button } from "@mui/material";

export default function bodyPage1() {
  return (
    <div className="bodyPage1">
      <Container>
        <Typography
          className="typography"
          variant="subtitle2"
          align="left"
          fontWeight="800"
        >
          Dataya esaslanaraq <br /> <span> agilli qarerlar </span>verin. &nbsp;
          <Typography className="body2" variant="body2" align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
            nisl <br /> lacinia volutpat leo iaculis, maximus massa.
          </Typography>
          <Button className="contained" variant="contained" color="success">
            Submit
          </Button>
        </Typography>
      </Container>
    </div>
  );
}
