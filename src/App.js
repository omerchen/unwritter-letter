import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.png";
import "./App.scss";
import ReactGA from "react-ga";
import Modal from "react-awesome-modal";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  FacebookIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

const GA_POSTFIX = "";

const App = (props) => {
  const [isFinish, setIsFinish] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [content, setContent] = useState("");
  const currentTime = new Date();
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => setModalVisible(false);

  const reloadSite = () => {
    scrollTop();
    setIsFinish(false);
    setTo("");
    setFrom("");
    setContent("");
  };

  const download = (filename, text) => {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

    ReactGA.event({
      category: "download" + GA_POSTFIX,
      action: to,
      label: from,
    });
  };

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
        disabled={content == "" || to == ""}
        onClick={() => {
          scrollTop();
          setIsFinish(true);
          ReactGA.event({
            category: "letter" + GA_POSTFIX,
            action: to,
            label: from,
            value: content ? content.length : 0,
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
      <h5>תוכן המכתב לא נשמר בשום מקום</h5>
      <h6>שיתוף מכתב:</h6>
      <div className="iconsWrapper">
        <FacebookShareButton url="https://unwritten-letter.now.sh" quote={"מכתב שלא נכתב ל"+to+".\n\n"+content+"\n\nרוצים גם אתם לכתוב מכתב?\n"}>
          <FacebookIcon round size={55} onClick={()=>{
            ReactGA.event({
              category: "facebookLetterShare" + GA_POSTFIX,
              action: to,
              label: from,
              value: content ? content.length : 0,
            });
          }} />
        </FacebookShareButton>
        <WhatsappShareButton url="https://unwritten-letter.now.sh" title={"מכתב שלא נכתב ל"+to+".\n\n"+content+"\n\nרוצים גם אתם לכתוב מכתב?\n"}>
          <WhatsappIcon round size={55} onClick={()=>{
            ReactGA.event({
              category: "whatsappLetterShare" + GA_POSTFIX,
              action: to,
              label: from,
              value: content ? content.length : 0,
            });
          }} />
        </WhatsappShareButton>
        <EmailShareButton url="https://unwritten-letter.now.sh" subject={"מכתב שלא נכתב ל"+to} body={content+"\n\nרוצים גם אתם לכתוב מכתב?\n"}>
          <EmailIcon round size={55} onClick={()=>{
            ReactGA.event({
              category: "emailLetterShare" + GA_POSTFIX,
              action: to,
              label: from,
              value: content ? content.length : 0,
            });
          }} />
        </EmailShareButton>
      </div>
      <h6>אפשרויות נוספות:</h6>

      <div
        class="button"
        onClick={() => {
          download(to + ".txt", content);
        }}
      >
        הורד מכתב
      </div>
      <div class="button" onClick={reloadSite}>
        כתוב מכתב נוסף
      </div>
    </div>
  );
  return (
    <div className="App" dir="rtl">
      <Modal visible={modalVisible} effect="fadeInUp" onClickAway={closeModal}>
        <div className="modal">
          <h1>מכתב שלא נכתב</h1>
          <p>
            השנים עוברות, אנחנו מתבגרים, חווים חוויות וצועדים במסלול החיים. כולם
            שם כדי לראות - את התספורת החדשה, את ההשבעה בטירונות, את תעודת
            ההצטיינות. כולם שם חוץ ממך, ואי אפשר שלא להרגיש את חסרונך.
          </p>

          <p>אני כל כך רוצה לספר לך על כל הדברים שקרו מאז שהלכת.</p>
          <p>
            הפרוייקט 'מכתב שלא נכתב' נועד על מנת לאפשר לכל אחת ואחד מאיתנו לכתוב
            מכתב למישהו אהוב שנמצא אי שם. מישהו שתמיד יהיה חלק מאיתנו, למרות
            שהוא כבר לא כאן. מה יכול להיות מתאים יותר, גם בעידן הטכנולוגי,
            מלכתוב מכתב, כמו פעם, בדרך הישנה, לכתובת לא ידועה, אל ארץ אי שם,
            לנמען שתמיד נמצא איתך בלב?
          </p>
          <p>המכתבים נשלחים ללא כתובת יעד.</p>
          <p>
            תוכלו לבחור האם לכתוב את שמכם או שלא לעשות זאת, האם לשמור עבור עצמכם
            את המכתב או פשוט לשלוח אותו. המכתבים לא יתפרסמו באתר ולא תהיה אליהם
            גישה לאחר שליחתם.
          </p>

          <a onClick={closeModal}>סגור</a>
        </div>
      </Modal>
      <header className="App-header">
        <img src={logo} alt="מכתב שלא נשלח" onClick={reloadSite} />
        <h1>מכתב שלא נכתב</h1>
        {isFinish ? (
          <>
            <h2>
              עוֹד נַחְזוֹר לְהִיפָּגֵשׁ, לְהִסְתַּכֵּל שׁוּב בָּעֵינַיִים
            </h2>{" "}
            <h2>יֵשׁ פְּקַק תְּפִילּוֹת כָּבֵד בַּנָּתִיב שֶׁל הַשָּׁמַיִים</h2>
            <h2>אֲבָל הַחוּט הַדַּק בֵּינֵינוּ אַף פַּעַם לֹא נִקְרַע.</h2>{" "}
            <h3>(נעם חרב, עילי בוטנר וילדי החוץ)</h3>
          </>
        ) : (
          <>
            <h2>
              כתבו כאן מכתב ליקירכם כדי לשתף אותו/אותה בכל העולה על רוחכם.{" "}
            </h2>
            <h2>
              המכתב יישלח לאי שם, המידע שנכתב בו הוא פרטי ולא נשמר בשום מקום.
            </h2>
            <h2>תוכלו לבחור האם לשמור את המכתב עבורכם לאחר שליחתו.</h2>
          </>
        )}
        <div className="moreDetails" onClick={openModal}>
          למידע נוסף >
        </div>
      </header>
      <main>{isFinish ? finishView : letterView}</main>
      <footer>
        <div className="iconsWrapper">
          <FacebookShareButton url="https://unwritten-letter.now.sh">
            <FacebookIcon round size={25} />
          </FacebookShareButton>
          <WhatsappShareButton url="https://unwritten-letter.now.sh">
            <WhatsappIcon round size={25} />
          </WhatsappShareButton>
          <EmailShareButton url="https://unwritten-letter.now.sh">
            <EmailIcon round size={25} />
          </EmailShareButton>
        </div>
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
