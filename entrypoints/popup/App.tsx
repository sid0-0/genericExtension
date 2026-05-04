import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import wxtLogo from "/wxt.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <img src="/icons/32.png" alt="Quick Tweaks" className="header-icon" />
        <h3>Quick Tweaks</h3>
      </div>
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
