import React from "react";
import useSliderState from "./hooks/useSliderState";
import ReactAudioPlayer from "react-audio-player";
import prettyMilliseconds from "pretty-ms";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function AnalyzeMusic(props) {
  const [value, updateValue] = useSliderState(0.5);
  const [timestamp, updateTimestamp, resetTimestamp] = useSliderState(0);
  const [duration, updateDuration] = useSliderState(0);
  const [musicAnalysis, updateMusicAnalysis, resetMusicAnalysis] =
    useSliderState([]);

  const params = ["sust", "improv"];
  let audio;

  const setDuration = (e) => {
    updateDuration(e.srcElement.duration);
  };

  const handlePlay = () => {
    audio.play();
  };

  const handlePause = () => {
    audio.pause();
  };

  const handleReset = () => {
    handlePause();
    audio.currentTime = 0;
    resetTimestamp();
    resetMusicAnalysis();
  };

  const handleListen = (time) => {
    if (timestamp !== time) {
      updateTimestamp(Math.floor(time));

      updateMusicAnalysis(
        musicAnalysis.concat({
          timestamp: Math.floor(time),
          value: value,
        })
      );
    }
  };

  const handleEnded = () => {
    updateTimestamp(duration);
  };

  const handleSubmit = () => {
    props.updateAnalysis({ params, musicAnalysis });
    props.nextStep();
  };

  return (
    <div>
      <h3>
        {prettyMilliseconds(timestamp * 1000, {
          colonNotation: true,
          secondsDecimalDigits: 0,
        })}
        /
        {prettyMilliseconds(duration * 1000, {
          colonNotation: true,
          secondsDecimalDigits: 0,
        })}
      </h3>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Stop and Reset</button>

      <ReactAudioPlayer
        src="https://docs.google.com/uc?export=download&id=1pSXTLJ2WZVTqvlj4THgOImalzLA_SWcX"
        listenInterval={1000}
        onCanPlay={setDuration}
        onListen={handleListen}
        onEnded={handleEnded}
        ref={(element) => {
          if (element) {
            audio = element.audioEl.current;
          }
        }}
      />

      <Slider
        defaultValue={value}
        min={0}
        max={1}
        step={0.1}
        onAfterChange={updateValue}
      />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}
