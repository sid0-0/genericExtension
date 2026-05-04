import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import wxtLogo from "/wxt.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h3>Functionalities:</h3>
      <ul className="feature-list">
        <li>
          <strong>ChatGPT</strong>
          <ul>
            <li>Reject non-essential cookies.</li>
            <li>Stay logged out of your account.</li>
          </ul>
        </li>
        <li>
          <strong>Gemini</strong>
          <ul>
            <li>Remove chat width restrictions.</li>
          </ul>
        </li>
        <li>
          <strong>GitHub</strong>
          <ul>
            <li>Add copy button to items in summaries.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default App;
