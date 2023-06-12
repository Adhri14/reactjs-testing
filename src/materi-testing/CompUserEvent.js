import React, { useState } from "react";

export default function CompUserEvent({ onSubmit }) {
  const [value, setValue] = useState("");

  return (
    <div>
      <p>Anda mengetik : {value}</p>
      <input
        value={value}
        placeholder="input value"
        onChange={(val) => setValue(val.target.value)}
      />
      <p data-testid="text-submit" onClick={onSubmit}>
        Submit
      </p>
    </div>
  );
}
