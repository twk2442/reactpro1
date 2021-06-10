import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; //   뒤에 app은 파일 이름 app.js
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, // 여기서 <App /> jsx문법이자 리액트 엘리먼트
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
