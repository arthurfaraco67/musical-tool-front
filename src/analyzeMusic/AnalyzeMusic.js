import React from 'react';
import Timestamp from './components/Timestamp';
import ControlButtons from './components/ControlButtons';
import useSliderState from '../hooks/useSliderState';
import ReactAudioPlayer from 'react-audio-player';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function AnalyzeMusic(props) {
	const [ value, updateValue ] = useSliderState(0.5);
	const [ timestamp, updateTimestamp, resetTimestamp ] = useSliderState(0);
	const [ duration, updateDuration ] = useSliderState(0);
	const [ musicAnalysis, updateMusicAnalysis, resetMusicAnalysis ] = useSliderState([]);
	const [ songEnded, updateSongEnded ] = useSliderState(false);

	const params = [ 'sust', 'improv' ];
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
					timestamp: Math.floor(roundedTime),
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
		props.updateAnalysis({ params, musicAnalysis });
		props.nextStep();
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
				src='https://docs.google.com/uc?export=download&id=1pSXTLJ2WZVTqvlj4THgOImalzLA_SWcX'
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
			<Slider defaultValue={value} min={0} max={1} step={0.1} onAfterChange={updateValue} />
			<button disabled={!songEnded} onClick={handleSubmit}>
				Enviar
			</button>
		</div>
	);
}
