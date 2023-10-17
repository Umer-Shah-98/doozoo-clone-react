import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ChatBot from "./ChatBot";

const ContainerOne = () => {
  const styles = {
    chatBotContainer: {
      borderRadius: "20px",
      background:
        "linear-gradient(rgba(255, 255, 255, 0.61) 0%, rgba(255, 255, 255, 0.07) 86.15%)",
      height: "100%",
    },
    container: {
      background: "linear-gradient(rgb(249, 163, 5) 0%, rgb(255, 102, 0) 100%)",
      borderRadius: "20px",
      // height: "600px",
    },
  };

  return (
    <div className="sm:mx-4 mt-20">
      <Container sx={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <div className="left px-5">
              <Typography
                variant="h2"
                align="center"
                sx={{ fontFamily: "Outfit" }}
              >
                <strong className="leading-relaxed text-white">
                  CHAT WITH
                </strong>
              </Typography>
              <Typography
                variant="h2"
                align="center"
                sx={{ fontFamily: "Outfit" }}
              >
                <strong className="leading-relaxed text-white">
                  INTELLIGENT
                </strong>
              </Typography>
              <Typography
                variant="h2"
                align="center"
                sx={{ fontFamily: "Outfit" }}
              >
                <strong className="leading-relaxed text-white">
                  DOOZOO AI &
                </strong>
              </Typography>
              <Typography
                variant="h2"
                align="center"
                sx={{ fontFamily: "Outfit" }}
              >
                <strong className="leading-relaxed text-white">
                  DISCOVER THE
                </strong>
              </Typography>
              <Typography
                variant="h2"
                align="center"
                sx={{ fontFamily: "Outfit" }}
              >
                <strong className="leading-relaxed text-white">
                  FUTURE OF
                </strong>
              </Typography>
              <Typography
                variant="h2"
                align="center"
                sx={{ fontFamily: "Outfit" }}
              >
                <strong className="leading-relaxed text-white">DESIGN </strong>
              </Typography>
              <Typography
                variant="h2"
                align="center"
                sx={{ fontFamily: "Outfit" }}
              >
                <strong className="leading-relaxed text-white ">
                  WORKFLOW
                </strong>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="right px-5">
              <div
                style={styles.chatBotContainer}
                className="chat-container bg-opacity-50 mb-10"
              >
                <div className="chatBot p-5">
                  <ChatBot></ChatBot>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContainerOne;
