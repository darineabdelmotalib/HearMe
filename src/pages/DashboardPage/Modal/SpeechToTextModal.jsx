import React, { useState } from "react";
import axios from "axios";
import close from "../../../assets/icons/close.png";
import mic from "../../../assets/icons/mic.png";
import "./SpeechToTextModal.scss";
import "regenerator-runtime/runtime";

function SpeechToTextModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [text, setText] = useState("");
  const [recording, setRecording] = useState(false);
  const [apiResult, setApiResult] = useState("");
  const [language, setLanguage] = useState("english");

  const handleOnRecord = async (event) => {
    event.preventDefault();

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.onstart = () => {
      setRecording(true);
    };

    recognition.onspeechend = () => {
      recognition.stop();
      setRecording(false);
    };

    recognition.onresult = async function (event) {
      const transcript = event.results[0][0].transcript;
      setText(transcript);

      const response = await axios.post(
        "http://localhost:8080/soundtotext/translate",
        {
          text: `translate this: ${transcript}`,
          language: language,
        }
      );

      setApiResult(response.data.translation);
    };

    recognition.start();
  };

  const handleReset = (event) => {
    event.preventDefault();
    setText("");
    setApiResult("");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <section className="speech">
          <img
            className="speech__close-button"
            onClick={onClose}
            src={close}
            alt="close button"
          />
          <p className="speech__text">
            Select the language you are speaking and hit the mic button to start
            recording!
          </p>

          <div className="speech__buttons">
            <div className="speech__language">
              <label htmlFor="language">Select language: </label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)} 
                className="speech__language__options">
                <option value="english" className="speech__option">English</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
              </select>
            </div>

            <button
              className={`speech__mic-toggle ${
                recording ? "is-recording" : ""
              }`}
              id="mic"
              onClick={handleOnRecord}
            >
              <span className="speech__mic-icon">
                <img
                  className="speech__mic-icon"
                  src={mic}
                  alt="mic icon"
                ></img>
              </span>
            </button>
          </div>
          <p className="speech__converted-text">Speech: {text}</p>
          <p className="speech__converted-text">Translation: {apiResult}</p>

          <div className="speech__buttons-container">
            <button
              className="speech__buttons-container__reset"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SpeechToTextModal;
