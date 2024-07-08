import React, { useRef, useState, useEffect } from "react";
import closeIcon from "../../../../assets/icons/close.png";
import "./AslToTextModal.scss";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "./utilities";
import {loveYouGesture} from "./LoveYou"; 
import * as fp from "fingerpose";

function AslToTextModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [gestureName, setGestureName] = useState("No gesture detected");

    const runHandpose = async () => {
        //load the handpose model
        const net = await handpose.load();
        console.log("Handpose model loaded.");
        //  Loop and detect hands every 10ms
        setInterval(() => {
          detect(net);
        }, 10);
    };

    const detect = async (net) => {
        
        if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
          //get video properties
          const video = webcamRef.current.video;
          const videoWidth = webcamRef.current.video.videoWidth;
          const videoHeight = webcamRef.current.video.videoHeight;
    
          //set video ref width
          webcamRef.current.video.width = videoWidth;
          webcamRef.current.video.height = videoHeight;
    
          //set canvas height and width
          canvasRef.current.width = videoWidth;
          canvasRef.current.height = videoHeight;
    
          // Make Detections
          const hand = await net.estimateHands(video); //if hand.length > 0 means hand is detected

          if (hand.length > 0) {
            const GE = new fp.GestureEstimator([
              //possible hand gestures model can estimate
              loveYouGesture
            ]);

            const gesture = await GE.estimate(hand[0].landmarks, 4);

            if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
              console.log(gesture.gestures[0].name);
              setGestureName(gesture.gestures[0].name);
    
              const confidence = gesture.gestures.map(
                (prediction) => prediction.confidence
              );
              const maxConfidence = confidence.indexOf(
                Math.max.apply(null, confidence)
              );
            }
          }

          const ctx = canvasRef.current.getContext("2d");
          drawHand(hand, ctx);
        }
      };

      useEffect(()=>{runHandpose()},[]);


    return (
        <div className="modal-overlay-asl" onClick={onClose}>
            <div className="modal-asl" onClick={(e) => e.stopPropagation()}>
                <img
                    className="modal__close-button-asl"
                    onClick={onClose}
                    src={closeIcon}
                    alt="close button"
                />
                <div className="webcam-container">
                    <Webcam
                        ref={webcamRef}
                        className="webcam"
                    />
                    <canvas
                        ref={canvasRef}
                        className="canvas"
                    />
                </div>
                <p className="gesture-name">Gesture Name: {gestureName}</p>
            </div>
        </div>
    );
}

export default AslToTextModal;
