import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from './App.js';


function TemporaryName() {
  return (
    <div className="container appcolor">
      <App />
    </div>
  );
}

ReactDom.render(<TemporaryName />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
