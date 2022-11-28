import React from "react";
import reactLogo from "../meme.png"; 


function Navbar() {
    return (
      <header className="head">
        <div className="nav">
          <div className="icon">
          <img src={reactLogo} alt="react logo" width="35px" />
          <h3 className="jon-h">Meme Generator</h3>
          </div>
          <p className="jon-h">React Course - Project 3</p>
        </div>
      </header>
    );
  }
  
export default Navbar;