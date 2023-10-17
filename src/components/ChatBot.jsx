import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import ChatTopImage from "../assets/images/chat-top.png";
import ChatMessage from "./ChatMessage";
import "./styles.css";
const ChatBot = () => {
  const [showDots, setShowDots] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowDots(false);
    }, 3000);
  });
  return (
    <>
      <div className="bg-transparent rounded-lg">
        <div className="chat-top relative">
          <img src={ChatTopImage} alt="chat-top-image" className="w-full" />
          <div className="heading-one absolute top-7 left-5 ">
            <Typography sx={{ fontFamily: "Outfit" }}>
              <strong className="text-white tracking-wider hidden md:block">
                Hello User
              </strong>
            </Typography>
          </div>
          <div className="heading-two absolute top-4 right-20 sm:right-48 md:right-4">
            <Typography sx={{ fontFamily: "Outfit" }}>
              <strong className="text-white tracking-wider  lg:block">
                Chat with Doozoo
              </strong>
            </Typography>
          </div>
        </div>
      </div>
      <div
        style={{ height: "500px" }}
        className="bg-white rounded-md px-5 pr-20 pt-2 -mt-4 shadow-xl shadow-amber-500"
      >
        {showDots && (
          <div className="dots flex-start flex gap-4 loading-dots mt-5">
            <div className="dot w-3 h-3 bg-amber-600 rounded-full"></div>
            <div className="dot w-3 h-3 bg-amber-600 rounded-full"></div>
            <div className="dot w-3 h-3 bg-amber-600 rounded-full"></div>
          </div>
        )}

        <ChatMessage></ChatMessage>
      </div>
    </>
  );
};

export default ChatBot;
