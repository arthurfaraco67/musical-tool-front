import React from 'react';
import { toMilliseconds } from './utils';

export default function PresentAnalys(props) {
	const { name, group, music, musicAnalysis } = props.analysis;

	return (
		<div>
			<h1>Análise submetida!</h1>

			<p>Nome: {name}</p>
			<p>Grupo: {group}</p>
			<p>Música: {music}</p>
			{musicAnalysis.map((music, index) => (
				<p key={index}>
					{music.value} em {toMilliseconds(music.timestamp)}
				</p>
			))}
		</div>
	);
}
