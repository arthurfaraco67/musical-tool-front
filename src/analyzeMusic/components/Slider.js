import React from "react";
import RCSlider from "rc-slider";
import "rc-slider/assets/index.css";

export default function Slider({ params, value, updateValue }) {
	return (
		<div className="slider-container">
			<div className="params-row">
				<p>{params[0]}</p>
				<p>{params[1]}</p>
			</div>

			<RCSlider defaultValue={value} min={0} max={10} step={1} onAfterChange={updateValue} />
		</div>
	);
}
