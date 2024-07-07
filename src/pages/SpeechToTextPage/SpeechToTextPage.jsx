// import React from "react";
// import 'regenerator-runtime/runtime';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// import "./SpeechToTextPage.scss";
// import { useState } from "react";

// function SpeechToTextPage() {
//     const [isAnimating, setIsAnimating] = useState(false);

//     const {
//         transcript,
//         listening,
//         resetTranscript,
//         browserSupportsSpeechRecognition
//     } = useSpeechRecognition();

//     if (!browserSupportsSpeechRecognition) {
//         return <span>Your Browser does not support speech to text recognition</span>
//     }

//     const startListening = () => {
//         SpeechRecognition.startListening();
//         setIsAnimating(true);
//     };

//     const stopListening = () => {
//         SpeechRecognition.stopListening();
//         setIsAnimating(false);
//     };

//     return (
//         <section className="speech">
//             <p className="speech__text">Press the 'start' button below to start recording!</p>
//             <span className={`material-icons speech__icon ${isAnimating ? 'speech__icon--animating' : ''}`}>
//                 🎤
//             </span>

//             <div className="speech__buttons">
//                 <button className="speech__buttons__button" onClick={startListening}>
//                     Start
//                 </button>
//                 <button className="speech__buttons__button speech__buttons__button--stop" onClick={stopListening}>
//                     Stop
//                 </button>
//                 <button className="speech__buttons__button speech__buttons__button--reset" onClick={resetTranscript}>
//                     Reset
//                 </button>
//             </div>
//             <p className="speech__converted-text">{transcript || 'No text'}</p>
//         </section>
//     );
// }

// export default SpeechToTextPage;
