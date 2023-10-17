import React, { useRef, useState } from "react";
import GenImage from "../assets/images/gen.png";
import InstagramIcon from "../assets/images/insta.png";
import { Button, TextField, Typography } from "@mui/material";
import "./styles.css";
import { toast } from "react-toastify";
const Footer = ({ focusOnScroll }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const emailInputRef = useRef();
  // focusOnScroll(emailInputRef);
  // const handleFocus = () => {
  //   if (emailInputRef.current) {
  //     emailInputRef.current.focus();
  //   }
  // };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputEmailValue(value);

    // Regular expression for email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    setIsInvalidEmail(!emailPattern.test(value));
    setIsButtonDisabled(!value || !emailPattern.test(value));
  };
  const handleJoinList = () => {
    toast.success(`Thanks for joining, you will be notified shortly.`,{theme:'colored'});
  };
  const styles = {
    joinButton: {
      background: "linear-gradient(rgb(255, 149, 1) 30%, rgb(255, 102, 0) 90%)",
      height: "2.9rem",
      borderRadius: "10px",
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
      fontFamily: "Outfit",
      fontSize: "10px",
    },
    emailInput: {
      width: "20rem",
      "&focus:": {
        borderColor: "red",
      },
      "&hover:": {
        outline: "2 px solid green",
        backgroundColor: "red",
      },
    },
  };
  return (
    <>
      <div className="image mt-5">
        <img src={GenImage} width="100%" />
      </div>
      <div className="wait-list-box mx-10 -mt-8">
        <div className="text">
          <Typography
            variant="h4"
            align="center"
            color="#ff7100"
            sx={{ fontFamily: "Outfit" }}
          >
            <span className="font-semibold">Join the waitlist for early </span>
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="#ff7100"
            sx={{ fontFamily: "Outfit" }}
          >
            <span className="font-semibold">access to DOOZOO GEN 2</span>
          </Typography>
        </div>
        <div className="email-input flex justify-center mt-16">
          <div className="input">
            <TextField
              variant="outlined"
              InputLabelProps={{
                style: { fontSize: "10px", color: "gray" }, // Adjust the font size as needed
              }}
              sx={{
                fontFamily: "Outfit",
                fontSize: "8px",
                "& label.Mui-focused": {
                  color: "#ff7100",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray", // Remove border color
                    height: "3.2rem",
                    borderRadius: "10px",
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                    fontSize: "8px",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                    outline: "1px",
                  },
                  "&:hover fieldset": {
                    borderColor: "orange", // Remove border color on hover
                  },
                },
              }}
              label="Drop Your Email..."
              value={inputEmailValue}
              ref={emailInputRef}
              onChange={handleInputChange}
              // onScroll={handleFocus}
              error={isInvalidEmail}
              helperText={isInvalidEmail ? "Invalid email format" : ""}
            ></TextField>
          </div>
          <div className="button ">
            <Button
              sx={styles.joinButton}
              variant="contained"
              disabled={isButtonDisabled}
              onClick={handleJoinList}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
      <div className="social-media-links flex justify-center sm:justify-around md:justify-between gap-2 mx-5 mt-20 mb-2">
        <Typography variant="body2" sx={{ fontFamily: "Outfit" }} color="gray">
          <span>
            Connect with Doozoo{" "}
            <img
              src={InstagramIcon}
              alt="insta-icon"
              className="inline ml-3 mb-1"
            />
          </span>
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: "Outfit" }} color="gray">
          @ Doozoo inc 2023.
        </Typography>
      </div>
    </>
  );
};

export { Footer };
