// Import dependencies
import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// Define Gesture Description
export const yesGesture = new GestureDescription('Yes');

// Thumb
yesGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
yesGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
yesGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// Index
yesGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
yesGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.25);
yesGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.25);

// Middle
yesGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
yesGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.25);
yesGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.25);

// Ring
yesGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
yesGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.25);
yesGesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.25);

// Pinky
yesGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
yesGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.25);
yesGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.25);
