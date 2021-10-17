import React, { useState } from 'react';
import IdentificationForm from './IdentificationForm';
import SelectMusic from './SelectMusic';
import PresentAnalysis from './PresentAnalysis';
import AnalyzeMusic from './analyzeMusic/AnalyzeMusic';
import axios from 'axios';

export default function Formflow() {
	const [ step, setStep ] = useState(1);
	const [ analysis, setAnalysis ] = useState({});

	const baseURL = 'https://music-tool-api.herokuapp.com/analysis';

	const nextStep = () => {
		setStep(step + 1);
	};

	const updateAnalysis = (newResponse) => {
		setAnalysis({ ...analysis, ...newResponse });
	};

	switch (step) {
		case 1:
			return <IdentificationForm nextStep={nextStep} updateAnalysis={updateAnalysis} />;
		case 2:
			return <SelectMusic nextStep={nextStep} updateAnalysis={updateAnalysis} />;
		case 3:
			return <AnalyzeMusic nextStep={nextStep} updateAnalysis={updateAnalysis} />;
		case 4:
			axios
				.post(baseURL, analysis)
				.then(function(response) {
					console.log(response);
				})
				.catch(function(error) {
					console.log(error);
				});
			return <PresentAnalysis analysis={analysis} />;
		default:
			return <IdentificationForm nextStep={nextStep} updateAnalysis={updateAnalysis} />;
	}
}
