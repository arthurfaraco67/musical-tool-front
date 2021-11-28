import React from "react";
import { musicPath } from "../utils";
import Timestamp from "./components/Timestamp";
import ControlButtons from "./components/ControlButtons";
import Slider from "./components/Slider";
import useSliderState from "../hooks/useSliderState";
import ReactAudioPlayer from "react-audio-player";

export default function AnalyzeMusic(props) {
	const [ value, updateValue ] = useSliderState(5);
	const [ timestamp, updateTimestamp, resetTimestamp ] = useSliderState(0);
	const [ duration, updateDuration ] = useSliderState(0);
	const [ musicAnalysis, updateMusicAnalysis, resetMusicAnalysis ] = useSliderState([]);
	const [ songEnded, updateSongEnded ] = useSliderState(false);

	const { updateAnalysis, nextStep, musicId } = props;

	const params = [ "Sustentação", "Improvisação" ];
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
		const roundedTime = Math.floor(time);

		if (timestamp !== roundedTime) {
			updateTimestamp(Math.floor(roundedTime));
			updateMusicAnalysis(
				musicAnalysis.concat({
					timestamp: roundedTime,
					value
				})
			);
		}
	};

	const handleEnded = () => {
		const roundedDuration = Math.floor(duration);

		updateSongEnded(true);
		updateTimestamp(roundedDuration);

		if (timestamp !== roundedDuration) {
			updateMusicAnalysis(
				musicAnalysis.concat({
					timestamp: roundedDuration,
					value
				})
			);
		}
	};

	const handleSubmit = () => {
		updateAnalysis({ params, musicAnalysis });
		nextStep();
	};

	return (
		<div>
			<Timestamp timestamp={timestamp} duration={duration} />
			<ControlButtons
				disableControls={songEnded}
				handlePlay={handlePlay}
				handlePause={handlePause}
				handleReset={handleReset}
			/>
			<ReactAudioPlayer
				src={musicPath(musicId)}
				listenInterval={500}
				onCanPlay={setDuration}
				onListen={handleListen}
				onEnded={handleEnded}
				ref={(element) => {
					if (element) {
						audio = element.audioEl.current;
					}
				}}
			/>

			<Slider params={params} value={value} updateValue={updateValue} />
			<button disabled={!songEnded} onClick={handleSubmit}>
				Enviar
			</button>
		</div>
	);
}
