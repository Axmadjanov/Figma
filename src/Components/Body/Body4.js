import React from "react";
import "./body.scss";
import { Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Manager from "../Images/manager.jpg";
import LensBlurIcon from "@mui/icons-material/LensBlur";

export default function bodyPage4() {
  return (
    <div className="bodyPage4">
      <Container>
        <Grid container rowSpacing={5}>
          <Grid item xs={12} md={12}>
            <Typography variant="h6" align="center" fontWeight="600">
              Haqqimizda deyilmish <span>fikirlar</span>
            </Typography>
          </Grid>
          <Grid item xs={0} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <div className="opinion">
              <Typography variant="caption" color="#fff">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                pharetra nisl at odio efficitur eleifend. Proin a tortor lorem.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Suspendisse lobortis mi a rutrum
                rhoncus.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={0} md={2}></Grid>
          <Grid item xs={12} md={12}>
            <div className="name">
              <img
                src={Manager}
                alt="Girl in a jacket"
                width="100"
                height="70"
              />
              <Typography variant="body1">
                Nihad Mustafazde
                <Typography variant="body2" fontWeight="600">
                  <span>Marketi mencer / Hyundai</span>
                </Typography>
              </Typography>
            </div>
          </Grid>
          {/* <LensBlurIcon style={{ fontSize: "60px", color: "green" }} /> */}
        </Grid>
      </Container>
    </div>
  );
}
