import React, { useState } from "react";
import axios from "axios";
import close from "../../../assets/icons/close.png";
import mic from "../../../assets/icons/mic.png";
import "./SpeechToTextModal.scss";
import "regenerator-runtime/runtime";

function SpeechToTextModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [text, setText] = useState("Start recording!");
  const [recording, setRecording] = useState(false);
  const [apiResult, setApiResult] = useState("No translation");
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
    setText("Start recording!");
    setApiResult("No translation");
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
            Press the 'start' button below to start recording!
          </p>

          <button
            className={`speech__mic-toggle ${recording ? "is-recording" : ""}`}
            id="mic"
            onClick={handleOnRecord}
          >
            <span className="speech__mic-icon">
              <img className="speech__mic-icon" src={mic} alt="mic icon"></img>
            </span>
          </button>

          <div className="speech__buttons">
            <label htmlFor="language">Select Language: </label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="spanish">Spanish</option>
            </select>
            <button
              className="speech__buttons__button speech__buttons__button--reset"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
          <p className="speech__converted-text">{text}</p>
          <p className="speech__converted-text">{apiResult}</p>
        </section>
      </div>
    </div>
  );
}

export default SpeechToTextModal;
