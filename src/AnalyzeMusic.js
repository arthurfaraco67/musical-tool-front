import React, { useEffect, useState } from "react";
import useSliderState from "./hooks/useSliderState";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function AnalyzeMusic(props) {
  const [sliderValue, updateSliderValue] = useSliderState(5);
  const [musicAnalysis, updateMusicAnalysis] = useSliderState([]);
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    updateMusicAnalysis(
      musicAnalysis.concat({ timestamp: time, value: sliderValue })
    );
  }, [time]);

  const handleSubmit = () => {
    props.updateAnalysis({ musicAnalysis });
    props.nextStep();
  };

  return (
    <div>
      <Slider
        defaultValue={sliderValue}
        min={0}
        max={10}
        onAfterChange={updateSliderValue}
      />
      <button onClick={handleSubmit}>Iniciar</button>
    </div>
  );
}
