// Import dependencies
import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const helloGesture = new GestureDescription('Hello');

// Thumb
helloGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
helloGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
helloGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// Index
helloGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
helloGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);
helloGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.25);
helloGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.25);

// Middle
helloGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
helloGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.25);
helloGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.25);
helloGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.25);

// Ring
helloGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
helloGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.25);
helloGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.25);
helloGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.25);

// Pinky
helloGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
helloGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);
helloGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.25);
helloGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.25);
