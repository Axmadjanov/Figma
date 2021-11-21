import React from "react";
import "./body.scss";
import { Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Map from "../Images/Maplar.png";
import Computer from "../Images/Computer.jpg";
import Whatsapp from "../Images/whatsapp.jpg";

export default function bodyPage5() {
  return (
    <div className="bodyPage5">
      <Container>
        <Grid container rowSpacing={3} columnSpacing={4}>
          <Grid item xs={7} md={10}>
            <Typography variant="body1" fontWeight="600">
              Yazdigimiz en son <span>bloqar</span>
            </Typography>
          </Grid>
          <Grid item xs={5} md={2}>
            <Button
              variant="text"
              align="right"
              style={{ fontSize: "10px", color: "#111" }}
            >
              Daha cox
              <ArrowRightAltIcon />
            </Button>
          </Grid>
          <br />
          <Grid item xs={12} md={4}>
            <div className="cards">
              <img src={Computer} height="150" />
              <Typography variant="body1" fontWeight="600">
                Biznes analitikasinin mahiyyeti nedir ?<br />
                <Typography variant="body2">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="cards">
              <img src={Map} height="150" />
              <Typography variant="body1" fontWeight="600">
                Biznes analitikasinin mahiyyeti nedir ?<br />
                <Typography variant="body2">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="cards">
              <img src={Whatsapp} height="150" />
              <Typography variant="body1" fontWeight="600">
                Biznes analitikasinin mahiyyeti nedir ?<br />
                <Typography variant="body2">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <div className="cosl">
              <Grid item xs={12} md={6}>
                <Typography variant="h6" fontWeight="600" align="left">
                  Sen de telimlere <span>qosul</span>
                  <br />
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc pharetra nisl at odio efficitur eleifend. Proin a
                    tortor lorem. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                    Suspendisse lobortis mi a rutrum rhoncus.
                  </Typography>
                </Typography>
                <br />
                <Button variant="contained" color="success">
                  Qeydiyyetdan kech
                </Button>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
