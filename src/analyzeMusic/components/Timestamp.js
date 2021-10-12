import React from 'react';
import { toMilliseconds } from '../../utils';

export default function AnalyzeMusic(props) {
	const { timestamp, duration } = props;

	return (
		<h3>
			{toMilliseconds(timestamp)}/{toMilliseconds(duration)}
		</h3>
	);
}
