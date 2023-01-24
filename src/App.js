import React, { useState } from "react";
import "./styles.css";
import TextField from "@mui/material/TextField";
import { flexbox } from "@mui/system";
import Component1 from "./component1";
import Component2 from "./component2";
import Component3 from "./component3";
import Component4 from "./component4";
import logo from "./eden_logo.png";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/making-progress-with-progress-indicators-part-1
 */

const steps = [
  {
    index: 0,
    label: "",
  },
  {
    index: 1,
    label: "",
  },
  {
    index: 2,
    label: "",
  },
  {
    index: 3,
    label: "",
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container">
      <br />
      <img src={logo} />

      <ul className="progress-indicator">
        {steps.map((step) => (
          <li
            key={step.index}
            className={`
              progress-step
              ${activeIndex === step.index ? "active" : "inactive"}
              ${activeIndex > step.index ? "complete" : "incomplete"}
            `}
          >
            <span className="step-number">{step.index + 1}</span>
            <h3>{step.label}</h3>
          </li>
        ))}
      </ul>


      {activeIndex === 0 ? <Component1 /> : ""}
      {activeIndex === 1 ? <Component2 /> : ""}
      {activeIndex === 2 ? <Component3 /> : ""}
      {activeIndex === 3 ? <Component4 /> : ""}

      <br />
      {activeIndex < steps.length && (
        <button
          style={{ backgroundColor: "#8057d7", color: "white", margin:"2%" }}
          onClick={() => setActiveIndex(activeIndex + 1)}
          className="progress-button next"
        >
          Create Workspace
        </button>
      )}
    </div>
  );
}

export default App;
