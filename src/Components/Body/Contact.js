import React from "react";
import "./body.scss";
import { Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <div className="Contactpage">
      <Container>
        <Grid container rowSpacing={3} rowSpacing={3}>
          <Grid item xs={12} md={4}>
            <div>
              <Typography variant="body1" fontWeight="600">
                CSS Analytics <br />
                <Typography variant="caption" style={{ color: "#111" }}>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </Typography>
              </Typography>
              <FacebookIcon
                style={{
                  margin: " 0 10px",
                  color: "blue",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
              />
              <LinkedInIcon
                style={{
                  margin: " 0 10px",
                  color: "blue",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <table>
              <thead>
                <th style={{ paddingRight: "160px" }}>Menyu</th>
              </thead>
              <tbody>
                <tr>
                  <td>Haqqimizda</td>
                  <td>Xidmetkarimiz</td>
                </tr>
                <tr>
                  <td>Biz kimik?</td>
                  <td>Komandamiz</td>
                </tr>
                <tr>
                  <td>T&i Merkezi</td>
                  <td>Telimer</td>
                </tr>
                <tr>
                  <td>Emekdasliq</td>
                  <td>Elaqa</td>
                </tr>
              </tbody>
            </table>
          </Grid>
          <Grid item xs={12} md={4}>
            <table>
              <thead>
                <th style={{ paddingRight: "160px" }}>Elaqe</th>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingRight: "80px",
                    }}
                  >
                    <PhoneIcon style={{ color: "green" }} />
                    +994 51 341 4340
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <LocationOnIcon style={{ color: "red" }} />
                    Asiq Ali 2A , Narimanov rayonu
                  </td>
                </tr>
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
