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
  let audio;

  const handlePlay = () => {
    updateTimestamp(audio.currentTime);
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

  const handleListen = () => {
    updateMusicAnalysis(
      musicAnalysis.concat({
        timestamp,
        value: value,
      })
    );
  };

  const handleSubmit = () => {
    props.updateAnalysis({ musicAnalysis });
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
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        listenInterval={1000}
        onListen={handleListen}
        ref={(element) => {
          if (element) {
            audio = element.audioEl.current;
            if (audio.duration > 0) {
              updateDuration(audio.duration);
              updateTimestamp(Math.floor(audio.currentTime));
            }
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
