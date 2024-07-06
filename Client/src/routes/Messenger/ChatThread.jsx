import { useEffect, useRef } from "react";
import {
  cameraIcon,
  emojiIcon,
  micIcon,
  plusIcon,
  sendIcon,
} from "../../assets/icons";
import { socket } from "../../Socket";
import { Form, useLoaderData, useOutletContext } from "react-router-dom";
import { useState } from "react";
import Chatmsg from "./Chatmsg";

var message;
var userInforForAction;

export async function sendMessagAction({ request }) {
  try {
    socket.emit("SendMessage", message, {
      sender: userInforForAction.userInfor._id,
      recipient: request.url.split("/")[4],
      sendTime: new Date(),
    });
  } catch (err) {
    console.log(err);
  }
  return null;
}

export default function ChatThread(props) {
  const chatData = useLoaderData();
  const [msg, setMsg] = useState("");
  const [convos, setConvos] = useState(chatData);
  const chatContainerRef = useRef(null);

  //Related to web Sockets
  socket.on("connect");
  useEffect(() => {
    socket.on("receiveMessage", (msg, sender) => {
      setConvos((prev) => {
        return [
          ...prev,
          {
            message: msg,
            time: new Date().toLocaleString(),
            sender: sender,
          },
        ];
      });
    });
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [convos]);

  // var boxsize;
  // function calcScrollHeight() {
  //   const box = document.getElementById('message-compose-box')
  //   boxsize = box?.scrollHeight;
  //   boxsize+='px';
  //   console.log(boxsize);
  //   box.height = boxsize;
  // }

  const userInfor = useOutletContext();
  userInforForAction = userInfor;

  function handleChange(e) {
    setMsg(e.target.value);
  }

  function handleSubmit(e) {
    message = msg;
    setMsg("");
  }

  return (
    <div className="flex flex-1 flex-col h-[90vh] justify-between px-20 pt-10">
      <div
        id="chatContainer"
        ref={chatContainerRef}
        className="overflow-auto invisible-scrollbar h-[90%] px-4"
      >
        <p className="text-center ">Today</p>
        <div className="flex h-full flex-col">
          {convos.map((convo, index) => {
            var sender;
            if (convo.sender == userInfor.userInfor._id) {
              sender = "me";
            }
            return (
              <Chatmsg
                sender={sender}
                key={index}
                message={convo.message}
                time={convo.sentTime}
              />
            );
          })}
        </div>
      </div>
      <div className="flex gap-4 items-center mt-2 p-2 pt-3">
        <button
          type="button"
          className="border h-fit border-[#877EFF] rounded-full p-1 "
        >
          <img className="w-[20px]" src={plusIcon} alt="More Media Icon" />
        </button>

        <Form
          method="post"
          onSubmit={(e) => handleSubmit(e)}
          className="w-[80%] flex gap-2 rounded-lg bg-[#101012] py-2 pr-2"
        >
          <textarea
            autoComplete="off"
            rows={1}
            className={`rounded-lg w-full px-2 pt-3 bg-[#101012] focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none ring-offset-[#7878A3] message-compose-box `}
            placeholder="Say sum'..."
            type="text"
            name="message"
            onChange={(e) => handleChange(e)}
            value={msg}
            id="message-compose-box"
          />
          <button type="button">
            <img
              className="w-[40px] h-[40px]"
              src={emojiIcon}
              alt="Emoji icon"
            />
          </button>
          <button type="button">
            <img
              className="w-[50px] h-[50px]"
              src={micIcon}
              alt="Record icon"
            />
          </button>
          <button type="button">
            <img
              className="w-[50px] h-[50px]"
              src={cameraIcon}
              alt="Send Photo"
            />
          </button>
          <button type="submit">
            <img
              className="w-[40px] h-[40px]"
              src={sendIcon}
              alt="Send message button"
            />
          </button>
        </Form>
      </div>
    </div>
  );
}
