import React from "react";
import "./Skills.css";

import reactIcon from "../assets/react.svg"; // Replace with your icon file paths
import javascriptIcon from "../assets/javascript.svg";
import c from "../assets/c.svg";
import openCv from "../assets/opencv.svg";
import java from "../assets/java.svg";
import figma from "../assets/figma.svg";
import cpp from "../assets/cplusplus.svg";
import html from "../assets/html.svg";
import materialui from "../assets/materialui.svg";
import css from "../assets/css.svg";
import python from "../assets/python.svg";

// Add more icon imports as needed

const iconData = [
  { icon: reactIcon, label: "React" },
  { icon: javascriptIcon, label: "JavaScript" },
  { icon: c, label: "c" },
  { icon: openCv, label: "OpenCV" },
  { icon: java, label: "Java" },
  { icon: figma, label: "Figma" },
  { icon: cpp, label: "C++" },
  { icon: html, label: "HTML" },
  { icon: materialui, label: "Material UI" },
  { icon: css, label: "CSS" },
  { icon: python, label: "Python" },  
  
  // Add more icons and labels as needed
];

function Skills() {
  return (
    <div className="techstack-container">
      <h2 className="techstack-heading">Techstack</h2>
      <div className="icons-box">
        {iconData.map((item, index) => (
          <div className="icon" key={index}>
            <img src={item.icon} alt={item.label} />
            <div className="icon-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
