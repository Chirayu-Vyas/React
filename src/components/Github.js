import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";  // Import the CSS file

function Github() {
  return (
    <div className="git-container">
      <div className="git-content">
        <h1 className="project-heading">
          Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar
          username="Chirayu-Vyas"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </div>
    </div>
  );
}

export default Github;
