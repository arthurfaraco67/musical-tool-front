import { useState } from "react";

export default function useSliderState(initialVal) {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e) => {
    console.log(e);
    setValue(e);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
}
