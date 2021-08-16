import React from "react";
import useSliderState from "./hooks/useSliderState";
import ReactAudioPlayer from "react-audio-player";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function AnalyzeMusic(props) {
  const [value, updateValue, resetValue] = useSliderState(0.5);
  const [musicAnalysis, updateMusicAnalysis, resetMusicAnalysis] =
    useSliderState([]);
  let audio;

  const handlePlay = () => {
    // resetValue();
    resetMusicAnalysis();
    audio.play();
  };

  const handleStop = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  const handleListen = (timestamp) => {
    updateMusicAnalysis(
      musicAnalysis.concat({
        timestamp: Math.floor(timestamp),
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
      <button onClick={handlePlay}>Play</button>
      <button onClick={handleStop}>Stop</button>

      <ReactAudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        listenInterval={1000}
        onListen={handleListen}
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
      <button onClick={handleSubmit}>Iniciar</button>
    </div>
  );
}
