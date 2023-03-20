import React from "react";

export default function Header(props) {
  return (
    <>
      <header>
        <div className="logo-container">
          <img
            src={require("../images/header-logo.png")}
            alt="Troll Face"
            className="logo"
          />
          <h1>Meme Generator</h1>
        </div>
        <div className="course-info">React - Project</div>
      </header>
    </>
  );
}
