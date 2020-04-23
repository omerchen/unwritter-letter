import React from "react";
import logo from "./assets/images/logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App" dir="rtl">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>כתבו מכתב ליקירכם, המכתבים נשלחים לשום מקום.</p>
        <p>השתמשו באתר בשביל לפרוק ולשתף את יקיריכם בכל העולה על רוחכם.</p>
      </header>
    </div>
  );
}

export default App;
