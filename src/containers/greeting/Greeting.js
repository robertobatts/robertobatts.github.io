import React, { useContext, useState } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import Typist from 'react-typist';
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const [titleRendered, setTitleRenderd] = useState(false);

  if (!greeting.displayGreeting) {
    return null;
  }

  const updateSubTitle = () => {
    setTitleRenderd(false);
    setTitleRenderd(true);
  }

  function getTypist() {
    return (
      <>
        {titleRendered ?
          <Typist
            onTypingDone={() => updateSubTitle()}
            stdTypingDelay={35}
          >
            {greeting.subTitles.map((subTitle, i) => {
              return (
                <span key={i}>
                  {subTitle.text}
                  <Typist.Backspace
                    count={subTitle.backspace === -1 ? subTitle.text.length : subTitle.backspace}
                    delay={subTitle.backspace === 0 ? 0 : 1000}
                  />
                </span>
              )
            })}
          </Typist>
          : null}
      </>
    );
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
              <div style={{ display: "inline-block" }}>
                <Typist
                  className="TypistExample-header"
                  avgTypingDelay={120}
                  stdTypingDelay={10}
                  startDelay={200}
                  cursor={{ hideWhenDone: true, show: false }}
                  onTypingDone={() => { setTitleRenderd(true) }}
                >
                  {" "}
                  {greeting.title}{" "}
                </Typist>
              </div>
              <span className="wave-emoji">{emoji("👋")}</span>
              <div
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {getTypist()}
              </div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="View my CV"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
