import React from "react";
import Chatbot from "./Chatbot.js";
import Footer from "./Footer.js";
import Header from "./Header.js";

function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto flex justify-center items-center flex-col py-12">
        <img
          src="/maverick.png"
          alt="Maverick the Chatbot"
          className="w-64 h-60 rounded-full border-4 border-gray-200"
        />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
