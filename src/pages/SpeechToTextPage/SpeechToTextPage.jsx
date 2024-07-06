import React from "react";
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import "./SpeechToTextPage.scss";
import sound from "../../assets/images/sound.png";
import { useState, useRef } from "react";

function SpeechToTextPage() {

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Your Browser does not support speech to text recognition</span>
    }

    return (
        <section className="speech">
            <p className="speech__text">Press the 'start' button below to start recording!</p>
            <img src={sound} className="speech__image" alt="sound icon" />
            <p className="speech__microphone-text">Microphone:{listening? ' on': ' off'}</p>

            <div className="speech__buttons">
                <button className="speech__buttons__button" onClick={SpeechRecognition.startListening} >
                    Start
                </button>
                <button className="speech__buttons__button speech__buttons__button--stop"  onClick={SpeechRecognition.stopListening}>
                    Stop
                </button>

                <button className="speech__buttons__button speech__buttons__button--reset"  onClick={resetTranscript}>
                    Reset
                </button>
            </div>
            <p className="speech__converted-text">{transcript || 'No text'}</p>
        </section>
    );
}

export default SpeechToTextPage;
