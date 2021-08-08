import React from "react";
import useInputState from "./hooks/useInputState";

export default function SelectMusic() {
  const [music, updateMusic, resetMusic] = useInputState(1);

  const handleSubmit = () => {
    resetMusic();
  };
  return (
    <div>
      <h1>Música: {music}</h1>
      <select value={music} onChange={updateMusic}>
        <option value="1">Música 1</option>
        <option value="2">Música 2</option>
        <option value="3">Música 3</option>
        <option value="4">Música 4</option>
        <option value="5">Música 5</option>
        <option value="6">Música 6</option>
        <option value="7">Música 7</option>
      </select>
      <button onClick={handleSubmit}>Iniciar</button>
    </div>
  );
}
