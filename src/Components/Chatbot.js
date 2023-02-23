import React, { useState, useEffect } from "react";
import { chatbot } from "../Api.js";
import ChatMessage from "./ChatMessage.js";
import { motion } from "framer-motion";

function Chatbot(props) {
  const [conversation, setConversation] = useState([]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const message = `Hello there! I'm Maverick, your go-to Star for all things knowledge. What burning question do you have for me today?`;
    const name = "Maverick";
    setConversation([{ speaker: name, text: message }]);
    setName(name);
  }, []);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (input) {
      const response = await chatbot(input, name);
      console.log(response);
      setConversation([
        ...conversation,
        { speaker: "user", text: input },
        { speaker: name, text: response },
      ]);
      console.log(setInput(""));
      setInput("");
    }
  };
  const renderConversation = () => {
    return conversation.map((message, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: i * 0.1 }}
      >
        <ChatMessage message={message} />
      </motion.div>
    ));
  };

  return (
    <div className="flex justify-center items-center flex-col py-12 chat-message-container">
      <div className="relative">
        <div className="conversation-container">
          {renderConversation()}
          <form className="form-control" onSubmit={onFormSubmit}>
            <div class=" items-center">
              <div class="relative">
                <div class="absolute top-4 left-3"></div>
                <input
                  type="text"
                  className="h-14 w-80 rounded-lg z-0 focus:shadow focus:outline-none"
                  placeholder="Ask me anything..."
                  onChange={onInputChange}
                  value={input}
                />
                <div class="absolute top-2 right-2">
                  <button
                    className="h-10 w-20 text-white rounded-lg bg-gray-500 hover:bg-gray-600"
                    whileHover={{ scale: 1.1 }}
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
