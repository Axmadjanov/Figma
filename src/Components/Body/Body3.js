import React from "react";
import "./body.scss";
import { Container, Typography, Button } from "@mui/material";
import LensBlurIcon from "@mui/icons-material/LensBlur";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Grid from "@mui/material/Grid";

export default function bodyPage3() {
  return (
    <div className="bodyPage3">
      <Container>
        <Grid container rowSpacing={4}>
          {/* <LensBlurIcon className="lens" /> */}
          <Grid item xs={0} md={4}></Grid>
          <Grid item xs={12} md={4}>
            <div className="card">
              <MenuIcon className="searchIcon" />
              <Typography variant="body2" fontWeight="600">
                Data toplamasi
                <Typography style={{ fontSize: "10px" }}>
                  Biz malumotlarni tehlil uzre sizlarni professional biznes
                  xidmetlarimizi taklif edirik
                </Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={0} md={4}></Grid>
          <Grid item xs={0} md={4}></Grid>

          <Grid item xs={12} md={4}>
            <div className="card">
              <ManageSearchIcon className="searchIcon" />
              <Typography variant="body2" fontWeight="600">
                Data toplamasi
                <Typography style={{ fontSize: "10px" }}>
                  Biz malumotlarni tehlil uzre sizlarni professional biznes
                  xidmetlarimizi taklif edirik
                </Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={0} md={4}></Grid>
          <Grid item xs={0} md={4}></Grid>
          <Grid item xs={12} md={4}>
            <div className="card">
              <SignalCellularAltIcon className="searchIcon" />
              <Typography variant="body2" fontWeight="600">
                Data toplamasi
                <Typography style={{ fontSize: "10px" }}>
                  Biz malumotlarni tehlil uzre sizlarni professional biznes
                  xidmetlarimizi taklif edirik
                </Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={0} md={4}></Grid>

          <br />
          <div className="bodyPage3page2">
            <Grid container>
              <Grid item xs={7} md={11}>
                <Typography variant="body2" fontWeight="700">
                  Xidmetlerimizda harada <span>yararlana</span> bilersiniz?
                </Typography>
              </Grid>
              <Grid item xs={5} md={1}>
                <Button
                  style={{
                    fontSize: "10px",
                    color: "black",
                    fontWeight: "700",
                  }}
                >
                  Daha etrefli <ArrowRightAltIcon />
                </Button>
              </Grid>
              <br />
              <br />
              <Grid item xs={6} md={3}>
                <Button
                  variant="contained"
                  style={{
                    margin: "10px 0",
                    backgroundColor: "#222",
                    fontSize: "10px",
                  }}
                >
                  Bozneslar uchun
                </Button>
              </Grid>
              <Grid item xs={6} md={4}>
                <Button
                  variant="outlined"
                  style={{ margin: "10px 0", fontSize: "10px" }}
                >
                  Tadqiqotlar uchun
                </Button>
              </Grid>
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <Grid item xs={10} md={4}>
                <Button
                  variant="outlined"
                  style={{ margin: "10px 0", fontSize: "10px" }}
                >
                  davalat qurumlari va QHT-lar uchun
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Container>
    </div>
  );
}
