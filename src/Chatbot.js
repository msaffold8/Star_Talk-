import React, { useState, useEffect } from "react";
import { chatbot } from "./Api.js";
import ChatMessage from "./ChatMessage.js";
import { motion } from "framer-motion";

function Chatbot(props) {
  const [conversation, setConversation] = useState([]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const message = `Greetings, my friend. They say curiosity killed the cat, but it's not the curiosity that kills - it's the lack of answers. That's why I'm here, to satisfy your curiosity and quench your thirst for knowledge. So, what is it that you seek? An answer to the ultimate question of life, the universe, and everything? Or maybe just a good laugh? Either way, I'm at your service?`;
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
    <div className="flex flex-col h-screen justify-between">
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center">{name}</h1>
        <div className="conversation-container">{renderConversation()}</div>
      </div>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={input} onChange={onInputChange} />
        <button type="submit" whileHover={{ scale: 1.1 }}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
