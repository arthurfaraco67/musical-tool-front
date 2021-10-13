import React from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function Slider(props) {
	const { params, value, updateValue } = props;

	return (
		<div>
			<div className='params-row'>
				<p>{params[0]}</p>
				<p>{params[1]}</p>
			</div>

			<RCSlider defaultValue={value} min={0} max={1} step={0.1} onAfterChange={updateValue} />
		</div>
	);
}
