import React from "react";
import useInputState from "./hooks/useInputState";

export default function IdentificationForm() {
  const [name, updateName, resetName] = useInputState("");
  const [group, updateGroup, resetGroup] = useInputState("");

  const handleSubmit = () => {
    resetName();
    resetGroup();
  };
  return (
    <div>
      <h1>
        Name is: {name} & Group is: {group}
      </h1>
      <input type="text" value={name} onChange={updateName} />
      <input type="text" value={group} onChange={updateGroup} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
