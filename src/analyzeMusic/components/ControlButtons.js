import React from 'react';
import 'rc-slider/assets/index.css';

export default function ControlButtons(props) {
	const { disableControls, handlePlay, handlePause, handleReset } = props;

	return (
		<div>
			<button disabled={disableControls} onClick={handlePlay}>
				Play
			</button>
			<button disabled={disableControls} onClick={handlePause}>
				Pause
			</button>
			<button disabled={disableControls} onClick={handleReset}>
				Stop and Reset
			</button>
		</div>
	);
}
