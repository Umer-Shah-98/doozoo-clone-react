import React from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Box,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/images/logo.png";
import Introduction from "./Introduction";
import ContainerOne from "./ContainerOne";
import ContainerTwo from "./ContainerTwo";
import ContainerThree from "./ContainerThree";
import ContainerFour from "./ContainerFour";
import { Footer } from "./Footer";
// import { emailInputRef } from "./Footer";
const Layout = ({ children }) => {
  const ScrollToEmailInput = () => {
    console.log("cliked");
    const element = document.documentElement; // Get the root element (the entire page)
    element.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  const styles = {
    backgroundColor: {
      backgroundColor: "white",
    },
    textTransform: {
      textTransform: "lowercase",
    },
  };
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, backgroundColor: "white" }}>
        <AppBar
          sx={{ backgroundColor: "white" }}
          position="static"
          elevation={0}
        >
          <Toolbar className="flex flex-col md:flex-row justify-between gap-2">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="buttons flex flex-col md:flex-row gap-4">
              <button onClick={ScrollToEmailInput}>
                <Typography
                  variant="body2"
                  color="black"
                  sx={{ fontFamily: "Outfit" }}
                >
                  Have access already? Sign in
                </Typography>
              </button>
              <button onClick={ScrollToEmailInput}>
                <Typography color="#FF8A00" sx={{ fontFamily: "Outfit" }}>
                  Join the waitlist
                </Typography>
              </button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Introduction></Introduction>
      <ContainerOne></ContainerOne>
      <div className="mt-20">
        <ContainerTwo></ContainerTwo>
      </div>
      <div className="container-three">
        <ContainerThree></ContainerThree>
      </div>
      <ContainerFour></ContainerFour>
      <Footer></Footer>
      <div>{children}</div>
    </>
  );
};

export default Layout;
