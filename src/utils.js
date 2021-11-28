import prettyMilliseconds from "pretty-ms";

export const toMilliseconds = (time) => {
	return time
		? prettyMilliseconds(time * 1000, {
				colonNotation: true,
				secondsDecimalDigits: 0
			})
		: "0:00";
};

export const musicPath = (id) => `https://docs.google.com/uc?export=download&id=${id}`;
