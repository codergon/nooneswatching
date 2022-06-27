import dayjs from "dayjs";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const ChatScreen = ({ setTabType }) => {
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "Williams",
      time: "12:34 PM",
      message: "Hello everyone",
    },
    {
      sender: "Felix",
      time: "12:44 PM",
      message: "What's up Williams?",
    },
  ]);

  const SendMessage = () => {
    if (!chatInput.trim()) return;
    setMessages((p) => [
      ...p,
      {
        sender: "You",
        time: dayjs().format("hh:mm A"),
        message: chatInput,
      },
    ]);
    setChatInput("");
  };

  return (
    <div className="messaging_tab_container">
      <div className="section_header">
        <div className="main">
          <div className="back_button" onClick={() => setTabType("menu")}>
            <i className="ph-arrow-left-bold"></i>
          </div>
          <p>Call messages</p>
        </div>

        <div className="header_text">
          <div className="download_chat">
            <i className="ph-file-arrow-down-fill"></i>
          </div>
          <p className="sub">Messages are deleted once the call ends</p>
        </div>
      </div>

      <div className="chat_container">
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              <div className="sender_name_time">
                <p className="name">{msg?.sender}</p>
                <p className="time">{msg?.time}</p>
              </div>
              <div className="message_content">
                <p>{msg?.message}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="chat_input_container">
        <div className="input_cover">
          <TextareaAutosize
            minRows={1}
            maxRows={5}
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                SendMessage();
              }
            }}
            placeholder="Send a message to participants"
          />

          <button
            className={`send_message ${!chatInput.trim() ? "" : "typing"}`}
            onClick={SendMessage}
          >
            <i className="ph-paper-plane-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
