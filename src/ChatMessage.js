import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function ChatMessage({ message, delay }) {
  const isUser = message.speaker === "user";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { delay } }}
        exit={{ opacity: 0, y: 20 }}
        className={`chat-message-container ${
          isUser ? "justify-end" : "justify-start"
        }`}
      >
        {!isUser && (
          <div className="flex items-center text-sm mb-1">
            <svg
              className="w-4 h-4 fill-current text-gray-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.446 13.112A7 7 0 015.89 6.556 7 7 0 0112.446 0c1.517 0 2.945.47 4.135 1.352l2.203-2.203a1 1 0 111.414 1.414l-2.203 2.203A7.982 7.982 0 0120 10c0 2.118-.82 4.103-2.313 5.594A7.983 7.983 0 0112.446 20 7.982 7.982 0 015 17.594a7.983 7.983 0 01-2.313-5.594 7.982 7.982 0 012.313-5.594 7.982 7.982 0 015.594-2.313c1.955 0 3.787.717 5.207 2.027a1 1 0 11-1.414 1.414c-1.124-1.124-2.621-1.74-4.193-1.74a6.016 6.016 0 00-4.25 1.75 6.016 6.016 0 00-1.75 4.25 6.017 6.017 0 001.75 4.25 6.017 6.017 0 004.25 1.75c1.357 0 2.633-.425 3.706-1.198l-1.383-1.382a1 1 0 111.414-1.414l2.203 2.203c.863-.88 1.575-1.915 2.023-3.053h-2.591a1 1 0 110-2h3.28z"
                clipRule="evenodd"
              />
            </svg>
            <div className="font-bold mr-2">{message.speaker}:</div>
          </div>
        )}
        <motion.div
          className={`chat-message bg-gray-200 px-4 py-2 rounded-md text-sm max-w-xs ${
            isUser ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          whileHover={{
            scale: 1.02,
            transition: {
              duration: 0.2,
              y: -2,
              x: 2,
            },
          }}
        >
          {message.text}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ChatMessage;
