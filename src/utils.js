import prettyMilliseconds from 'pretty-ms';

export const toMilliseconds = (time) => {
	return time
		? prettyMilliseconds(time * 1000, {
				colonNotation: true,
				secondsDecimalDigits: 0
			})
		: '0:00';
};
