import React from 'react';
import useInputState from './hooks/useInputState';

export default function SelectMusic({ songs, nextStep, updateAnalysis }) {
	const [ music, updateMusic ] = useInputState(songs[0].music);

	const handleSubmit = () => {
		updateAnalysis({ music });
		nextStep();
	};

	return (
		<div>
			<h1>Música: {music}</h1>
			<select value={music} onChange={updateMusic}>
				{songs.map((song, index) => (
					<option key={index} value={song.music}>
						{song.music}
					</option>
				))}
			</select>
			<button onClick={handleSubmit}>Iniciar</button>
		</div>
	);
}
