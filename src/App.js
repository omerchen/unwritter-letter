import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.png";
import "./App.scss";
import ReactGA from "react-ga";

const App = (props) => {
  const [isFinish, setIsFinish] = useState(false);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [content, setContent] = useState("");
  const currentTime = new Date();
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const reloadSite = () => {
    scrollTop();
    setIsFinish(false);
    setTo("");
    setFrom("");
    setContent("");
  };

  function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

  useEffect(() => {
    ReactGA.initialize("UA-164324069-1");
  }, []);

  const letterView = (
    <>
      <div className="letter">
        <div className="date">
          {currentTime.getDate() +
            "." +
            (currentTime.getMonth() + 1) +
            "." +
            currentTime.getFullYear()}
        </div>
        <div className="head">
          <div className="field">
            <label>מכתב עבור</label>
            <input
              type="text"
              placeholder="שם הנמען"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <div className="field">
            <label>מאת</label>
            <input
              type="text"
              placeholder="שמך (לא חובה)"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
        </div>
        <div className="body">
          <textarea
            placeholder="כתבו כאן את תוכן המכתב..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
      <button
        className="button"
        disabled={content==""||to==""}
        onClick={() => {
          scrollTop();
          setIsFinish(true);
          ReactGA.event({
            category: "letter/debug",
            action: to,
            label: from,
          });
        }}
      >
        שלח
      </button>
    </>
  );

  const finishView = (
    <div className="finish">
      <h4>תודה על המכתב!</h4>
      <h5>תוכן המכתב לא נשמר בשום מקום, מקווים שעזרנו</h5>
      <div class="button" onClick={()=>{
        download(to+".txt", content)
      }}>
        שמור מכתב
      </div>
      <div class="button" onClick={reloadSite}>
        כתוב מכתב נוסף
      </div>
    </div>
  );
  return (
    <div className="App" dir="rtl">
      <header className="App-header">
        <img src={logo} alt="מכתב שלא נשלח" onClick={reloadSite} />
        <h1>מכתב שלא נכתב</h1>
        <h2>כתבו מכתב ליקירכם, המכתבים נשלחים לשום מקום.</h2>
        <h3>השתמשו באתר בשביל לפרוק ולשתף את יקיריכם בכל העולה על רוחכם.</h3>
      </header>
      <main>{isFinish ? finishView : letterView}</main>
      <footer>
        <p>הפרויקט הוקם ע״י שיר לשם ועומר חן</p>
        <p>
          צרו איתנו קשר:{" "}
          <a href="mailto:unwritten.letter.mail@gmail.com">
            unwritten.letter.mail@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
