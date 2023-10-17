import React from "react";
import Image from "../assets/images/Chat-Image.png";
import { Box, Typography } from "@mui/material";
const ContainerThree = () => {
  const styles = {
    backgroundContainer: {
      width: "100%",
      zIndex: -1,
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-40%)",
      height: { xs: "600px", sm: "250px", md: "500px", lg: "600px" },
    },
    // backgroundColor: { xs: "red", md: "green", lg: "blue" },
  };
  return (
    <div className="relative">
      <div className="image flex justify-center mt-48 ">
        <img src={Image} alt="app-image" className="w-96  md:w-2/3 lg:w-2/3" />
      </div>
      <Box
        sx={{
          backgroundColor: "#ff6600",
          position: "absolute",
          width: "100%",
          zIndex: -1,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-40%)",
          height: { xs: "200px", sm: "400px", md: "600px", lg: "600px" },
        }}

        // h-32 md:h-32 lg:h-64 xl:h-96
      ></Box>
      <div
        style={{ backgroundColor: "#ff6600" }}
        // style={{ height: "100px" }}
        className="text flex flex-col justify-start items-center  uppercase"
      >
        <Typography variant="h4" align="center" sx={{ fontFamily: "Outfit" }}>
          <span className="font-extrabold text-white text-opacity-50">
            Human X AI synergy to
          </span>
        </Typography>
        <Typography variant="h4" align="center" sx={{ fontFamily: "Outfit" }}>
          <span className="font-extrabold text-white text-opacity-50">
            revolutionize the design game
          </span>
        </Typography>
      </div>
    </div>
  );
};

export default ContainerThree;
