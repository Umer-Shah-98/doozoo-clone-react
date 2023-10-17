import React, { useEffect, useState } from "react";
import ChatMessagePhoto from "../assets/images/chatO.png";
import ChatMessageBookIcon from "../assets/images/book.png";
import { InputAdornment, TextField, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

// import "./styles.css";
// import "./typewriter.css";

const ChatMessage = () => {
  const [Message1, setShowMessage1] = useState(false);
  const [Message2, setShowMessage2] = useState(false);
  const showMessage1 = () => {
    setTimeout(() => {
      setShowMessage1(true);
    }, 3000);
  };
  const showMessage2 = () => {
    setTimeout(() => {
      setShowMessage2(true);
    }, 7000);
  };
  useEffect(() => {
    showMessage1();
    showMessage2();
  }, []); // Add an empty dependency array to ensure this effect runs once on component mount

  const styles = {
    inputField: {
      backgroundColor: "white",
      marginTop: "20px",
      borderRadius: "10px",
      border: "1px solid gray",
      fontFamily: "Outfit",
      // width: { sm: "100%" },
    },
  };

  return (
    <>
      {Message1 && (
        <div className="message bg-amber-500 flex gap-5 items-center rounded-md mt-5">
          <div className="image w-16 ml-2">
            <img src={ChatMessagePhoto} alt="" />
          </div>

          <div className="text p-5">
            <Typography variant="h6" sx={{ fontFamily: "Outfit" }}>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Good afternoon!",
                  500, // wait 1s before replacing "Mice" with "Hamsters"
                  "We are delighted",
                  500,
                  "to see your",
                  1000,
                  "interest in Doozoo 😇",
                  500,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "16px", color: "white" }}
                // repeat={Infinity}
              />
            </Typography>
          </div>
        </div>
      )}
      {Message2 && (
        <div className="message bg-amber-500 flex flex-col items-start rounded-md mt-5">
          <div className="image-text flex justify-between gap-5 items-start">
            <div className="image w-16 ml-2 mt-2">
              <img src={ChatMessagePhoto} alt="" />
            </div>
            <div className="text p-5">
              <Typography variant="h6" sx={{ fontFamily: "Outfit" }}>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Please enter your",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "email address to",
                    1000,
                    "join the exciting",
                    1000,
                    "Doozoo waitlist.",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "16px", color: "white" }}
                  repeat={Infinity}
                />
              </Typography>
            </div>
          </div>

          <div className="input-field m-5">
            <TextField
              fullWidth
              sx={styles.inputField}
              InputLabelProps={{
                style: { fontSize: "12px", color: "gray" }, // Adjust the font size as needed
              }}
              id="outlined-basic"
              label="Type something...."
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={ChatMessageBookIcon} alt="" />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatMessage;
