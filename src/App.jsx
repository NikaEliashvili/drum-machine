import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const drumSounds = {
    Q: {
      ref: useRef(
        new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")
      ),
      name: "Heater-1",
    },
    W: {
      ref: useRef(
        new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")
      ),
      name: "Heater-2",
    },
    E: {
      ref: useRef(
        new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")
      ),
      name: "Heater-3",
    },
    A: {
      ref: useRef(
        new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")
      ),
      name: "Heater-4",
    },
    S: {
      ref: useRef(
        new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")
      ),
      name: "Clap",
    },
    D: {
      ref: useRef(
        new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")
      ),
      name: "Open-HH",
    },
    Z: {
      ref: useRef(
        new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")
      ),
      name: "Kick-n'-Hat",
    },
    X: {
      ref: useRef(
        new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3")
      ),
      name: "Kick",
    },
    C: {
      ref: useRef(
        new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
      ),
      name: "Closed-HH",
    },
  };
  const [displayName, setDisplayName] = useState("");

  function runAudio(key) {
    const audioEl = drumSounds[key].ref.current;
    audioEl.currentTime = 0;
    audioEl.play();
    setDisplayName(drumSounds[key].name);
  }
  useEffect(() => {
    const audioOnKey = (e) => {
      const audioId = e.key.toUpperCase();
      if (drumSounds[audioId]) {
        runAudio(audioId);
        setDisplayName(drumSounds[audioId].name);
        const activeEl = document.getElementById(`pad-${audioId}`);
        activeEl.classList.add("active");
        setTimeout(() => activeEl.classList.remove("active"), 200);
      }
    };
    document.addEventListener("keydown", audioOnKey);

    return () => document.removeEventListener("keydown", audioOnKey);
  }, [drumSounds]);

  return (
    <>
      <div id="drum-machine">
        <div className="all-pads">
          <ul>
            {Object.keys(drumSounds).map((key) => (
              <li
                key={key}
                onClick={() => runAudio(key)}
                className="drum-pad"
                id={`pad-${key}`}
              >
                {key}
              </li>
            ))}
            {/* <li onClick={runAudio} className="drum-pad" id="pad-1">
              Q
              <audio
                id="Q"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                className="clip"
                name="Heater 1"
              ></audio>
            </li>
            <li onClick={runAudio} className="drum-pad" id="pad-2">
              W
              <audio
                id="W"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                className="clip"
                name="Heater 2"
              ></audio>
            </li>
            <li onClick={runAudio} className="drum-pad" id="pad-3">
              E
              <audio
                id="E"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                className="clip"
                name="Heater 3"
              ></audio>
            </li>
            <li onClick={runAudio} className="drum-pad" id="pad-4">
              A
              <audio
                id="A"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                className="clip"
                name="Heater 4"
              ></audio>
            </li>
            <li onClick={runAudio} className="drum-pad" id="pad-5">
              S
              <audio
                id="S"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                className="clip"
                name="Clap"
              ></audio>
            </li>
            <li onClick={runAudio} className="drum-pad" id="pad-6">
              D
              <audio
                id="D"
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                className="clip"
                name="Open-HH"
              ></audio>
            </li>
            <li onClick={runAudio} className="drum-pad" id="pad-7">
              Z
              <audio
                id="Z"
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                className="clip"
                name="Kick-n'-Hat"
              ></audio>
            </li>
            <li onClick={runAudio} className="drum-pad" id="pad-8">
              X
              <audio
                id="X"
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                className="clip"
                name="Kick"
              ></audio>
            </li>
            <li onClick={runAudio} className="drum-pad" id="pad-9">
              C
              <audio
                id="C"
                src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                className="clip"
                name="Closed-HH"
              ></audio>
            </li> */}
          </ul>
        </div>
        <div className="display-cont">
          <span>Sound Name:</span>
          <div id="display" className="display">
            {displayName}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
