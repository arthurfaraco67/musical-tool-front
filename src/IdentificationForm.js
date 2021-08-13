import React, { useEffect } from "react";
import useInputState from "./hooks/useInputState";

export default function IdentificationForm(props) {
  const [name, updateName] = useInputState("");
  const [group, updateGroup] = useInputState("");

  useEffect(() => {
    document.title = `Hello ${name}`;
  }, [name]);

  const handleSubmit = () => {
    props.updateAnalysis({ name, group });
    props.nextStep();
  };

  return (
    <div>
      <h1>
        Nome: {name} - Grupo: {group}
      </h1>
      <input type="text" value={name} onChange={updateName} />
      <input type="text" value={group} onChange={updateGroup} />
      <button onClick={handleSubmit}>Próximo</button>
    </div>
  );
}
