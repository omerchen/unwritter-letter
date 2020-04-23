import React, { useState } from "react";
import logo from "./assets/images/logo.svg";
import "./App.scss";

const App = (props) => {
  const [isFinish, setIsFinish] = useState(false);
  const currentTime = new Date()
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const reloadSite = () => {
    scrollTop();
    setIsFinish(false);
  };

  const letterView = (
    <>
      <div className="letter">
        <div className="date">{currentTime.getDate()+"."+(currentTime.getMonth()+1)+"."+currentTime.getFullYear()}</div>
        <div className="head">
          <div className="field">
            <label>מכתב עבור</label>
            <input type="text" placeholder="שם הנמען" />
          </div>
          <div className="field">
            <label>מאת</label>
            <input type="text" placeholder="שמך (לא חובה)" />
          </div>
        </div>
        <div className="body">
          <textarea placeholder="כתבו כאן את תוכן המכתב..." />
        </div>
      </div>
      <button
        className="button"
        onClick={() => {
          scrollTop();
          setIsFinish(true);
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
      <div
        class="button"
        onClick={reloadSite}
      >
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
