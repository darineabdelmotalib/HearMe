import React, { useState, useRef } from "react";
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
  const recognitionRef = useRef(null);

  const handleOnRecord = async (event) => {
    event.preventDefault();

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

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
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setRecording(false);
    }
  };

  const handleStop = (event) => {
    event.preventDefault();
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setRecording(false);
    }
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
            Select the languages for translation. Speaking in English will translate to the chosen language, and speaking in the chosen language will translate to English. <br></br><br></br>Hit the mic button to get started!
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
              className={`speech__mic-toggle ${recording ? "is-recording" : ""}`}
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
              onClick={handleStop}
            >
              Stop
            </button>
            
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
