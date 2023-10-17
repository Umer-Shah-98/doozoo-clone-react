import React, { useRef, useState } from "react";
import { Grid } from "@mui/material";
import BackgroundImage from "../assets/images/Torus3.png";
import BackgroundImageRoundCube from "../assets/images/RoundCube3.png";
import Video from "../assets/images/video.mp4";
import Thumbnail from "../assets/images/videothumbnail.png";
import PlayButton from "../assets/images/playButton.png";
import "./styles.css";
const ContainerTwo = () => {
  const [playButton, setPlayButton] = useState(true);
  const videoRef = useRef();
  const handlePlay = () => {
    setPlayButton(false);
    videoRef.current.play();
  };

  return (
    <>
      <Grid container>
        <Grid item xs={2} className="relative">
          <img
            src={BackgroundImage}
            alt="background-image"
            className="absolute top-10"
          />
        </Grid>
        <Grid item xs={8} className="flex rounded relative">
          {playButton && (
            <button
              className="play-button cursor-pointer absolute w-16 md:w-48 z-10"
              onClick={handlePlay}
            >
              <img
                src={PlayButton}
                alt="play-button"
                className="cursor-pointer"
              />
            </button>
          )}

          <video
            ref={videoRef}
            poster={Thumbnail}
            controls
            width="100%"
            className="rounded-xl"
          >
            <source src={Video} type="video/webm" />

            {/* <div className="play-button">
              Play button
              <img src={PlayButton} alt="play-button" />
            </div> */}
          </video>
        </Grid>
        <Grid item xs={2} className="relative">
          <img
            src={BackgroundImageRoundCube}
            alt="background-image"
            className="absolute"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ContainerTwo;
