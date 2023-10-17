import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import LaptopImage from "../assets/images/imageLaptop.png";
const ContainerFour = () => {
  return (
    <Container>
      <Grid container spacing={5} sx={{ marginTop: "5rem" }}>
        <Grid item xs={12} sm={6}>
          <img src={LaptopImage} alt="" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="text">
            <Typography
              variant="h3"
              color="#FF8A00"
              sx={{ marginBottom: "2rem", fontFamily: "Outfit" }}
            >
              <span className="font-bold">DOOZOO GEN 2</span>
            </Typography>
            <Typography variant="h5" color="gray" sx={{ fontFamily: "Outfit" }}>
              <span>
                Doozoo empowers beyond human limits and masters the ‘New world
                of working’ by perfecting a platform that delivers unlimited
                graphics, creative design and imagery with speed and efficiency.
                Empowering human potential with intelligent creative output and
                workflow superiority
              </span>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContainerFour;
