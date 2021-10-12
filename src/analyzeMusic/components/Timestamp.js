import React from 'react';
import prettyMilliseconds from 'pretty-ms';

export default function AnalyzeMusic(props) {
	const { timestamp, duration } = props;

	const toMilliseconds = (time) => {
		return time
			? prettyMilliseconds(time * 1000, {
					colonNotation: true,
					secondsDecimalDigits: 0
				})
			: '0:00';
	};

	return (
		<h3>
			{toMilliseconds(timestamp)}/{toMilliseconds(duration)}
		</h3>
	);
}
