import React, { useContext } from "react";
import call from "../image/call.png";
import video from "../image/video.png";
import opt from "../image/option.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

function Chat() {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={video} alt="" className="icon" />
          <img src={call} alt="" className="icon" />
          <img src={opt} alt="" className="icon" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
