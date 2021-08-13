import React, { useState } from "react";
import IdentificationForm from "./IdentificationForm";
import SelectMusic from "./SelectMusic";

export default function Formflow(props) {
  const [step, setStep] = useState(1);
  const [analysis, setAnalysis] = useState({});

  const nextStep = () => {
    setStep(step + 1);
  };

  const updateAnalysis = (newResponse) => {
    setAnalysis({ ...analysis, ...newResponse });
  };

  console.log(analysis);

  switch (step) {
    case 1:
      return (
        <IdentificationForm
          nextStep={nextStep}
          updateAnalysis={updateAnalysis}
        />
      );
    case 2:
      return (
        <SelectMusic nextStep={nextStep} updateAnalysis={updateAnalysis} />
      );
    default:
      return <h1>Other steps...</h1>;
  }
}
