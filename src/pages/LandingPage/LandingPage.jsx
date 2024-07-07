// LandingPage.js
import React, { useState } from "react";
import "./LandingPage.scss";
import hero from "../../assets/images/hero.png";
import { Link } from "react-router-dom";
import Modal from "./Modal/Modal";

function LandingPage() {
  const [modalInfo, setModalInfo] = useState({
    show: false,
    title: "",
    content: "",
  });

  const openModal = (title, content) => {
    setModalInfo({ show: true, title, content });
  };

  const closeModal = () => {
    setModalInfo({ show: false, title: "", content: "" });
  };

  return (
    <section className="landing">

      <div className="landing__left">
        <div className="hero">
          <img src={hero} className="hero__img" alt="Hero" />
          <p className="hero__title">
            Empowering the Hearing Impaired with Better Communication Tools
          </p>
        </div>

        <div className="landing__buttons">
          <Link to={"/getstarted"}>
            <button className="landing__buttons__button landing__buttons__button--getstarted">
              Get Started
            </button>
          </Link>
          <button className="landing__buttons__button landing__buttons__button--login">
            Log In
          </button>
        </div>
      </div>

      <div className="landing__right">
        <div className="about">
          <p className="about__heading">About</p>
          <p className="about__intro">
            Individuals with hearing impairments face significant challenges in
            understanding spoken language and communicating effectively in
            real-time. Existing tools either lack real-time translation
            capabilities or are not user-friendly enough for everyday use. This
            communication barrier can lead to misunderstandings, reduced
            accessibility, and social isolation.<br></br><br></br>
            "HearMe" is a mobile app designed to facilitate communication for people with hearing impairments. The app uses computer vision to translate American Sign Language (ASL) into written English and employs a speech-to-text API to convert spoken language into text in real-time. This dual functionality ensures that users can both express themselves and understand others effectively.
          </p>

          <div className="features">
            <p className="features__title">Features</p>
            <div className="features__buttons">
              <button
                className="features__button"
                onClick={() =>
                  openModal(
                    "ASL to Text",
                    "Utilizes advanced computer vision technology to recognize and translate ASL gestures into written English instantly. Provides real-time text output on the app screen for easy reading."
                  )
                }
              >
                ASL to Text
              </button>
              <button
                className="features__button"
                onClick={() =>
                  openModal(
                    "Speech to Text",
                    "Implements a speech-to-text API to convert spoken language into written text in real-time. Displays transcribed text on the app screen, allowing users to follow conversations easily."
                  )
                }
              >
                Speech to Text
              </button>
              <button
                className="features__button"
                onClick={() =>
                  openModal(
                    "Multi-language Support",
                    "Offers translation capabilities for other sign languages and spoken languages, catering to a diverse user base."
                  )
                }
              >
                Multi-language Support
              </button>
              <button
                className="features__button"
                onClick={() =>
                  openModal(
                    "Customization Options",
                    "Allows users to customize text size, font, and display colors to suit their preferences. Enables users to save frequent phrases and custom signs for quick access during conversations."
                  )
                }
              >
                Customization Options
              </button>
            </div>

            <p className="features__intro">
            Individuals with hearing impairments face significant challenges in
            understanding spoken language and communicating effectively in
            real-time. Existing tools either lack real-time translation
            capabilities or are not user-friendly enough for everyday use. This
            communication barrier can lead to misunderstandings, reduced
            accessibility, and social isolation.<br></br><br></br>
            "HearMe" is a mobile app designed to facilitate communication for people with hearing impairments. The app uses computer vision to translate American Sign Language (ASL) into written English and employs a speech-to-text API to convert spoken language into text in real-time. This dual functionality ensures that users can both express themselves and understand others effectively.
          </p>
          </div>
        </div>
      </div>

      <Modal show={modalInfo.show} onClose={closeModal} title={modalInfo.title}>
        {modalInfo.content}
      </Modal>
    </section>
  );
}

export default LandingPage;
