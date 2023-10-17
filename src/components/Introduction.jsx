import React from "react";
import { Container, Typography, Box } from "@mui/material";
import HandShakeIcon from "../assets/images/Hand1.png";

const Introduction = () => {
  return (
    <>
      <Container>
        <Typography
          align="center"
          color="#FF8A00"
          variant="h5"
          sx={{ fontFamily: "Outfit" }}
        >
          <strong>The Evolutionary gateway for</strong>
        </Typography>
        <Typography
          align="center"
          color="#FF8A00"
          variant="h5"
          sx={{ fontFamily: "Outfit" }}
        >
          <strong>design productivity</strong>
        </Typography>
        <div className="emoji-text my-10">
          <div className="hand-shake flex justify-center">
            <img src={HandShakeIcon} alt="hand-shake-icon" />
          </div>
          <Typography
            align="center"
            color="#FF8A00"
            variant="h5"
            sx={{ fontFamily: "Outfit" }}
          >
            <strong className="text-gray-500">Let's chat with</strong>{" "}
            <span className="font-bold">Doozoo</span>
          </Typography>
        </div>
      </Container>
    </>
  );
};

export default Introduction;
