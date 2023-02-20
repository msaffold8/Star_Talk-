import React from "react";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot.js";

function Home() {
  return (
    <div>
      {/* Header */}
      <header className="bg-gray-800 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold">Star Talks</h1>
          <nav>
            <ul className="flex space-x-4 text-white">
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chatbot/maverick" className="hover:text-gray-400">
                  Maverick
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex justify-center items-center flex-col py-12">
        <img
          src="/images/maverick.png"
          alt="Maverick the Chatbot"
          className="w-64 h-64 rounded-full border-4 border-gray-200 mb-8"
        />
        <Chatbot />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center text-gray-500 text-sm">
          &copy; 2023 Star Talk. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
