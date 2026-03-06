import { useState } from "react";

type Props = {
  currentNOE: number;
  onNOEChange: (value: number) => void;
};

export default function NOE({ currentNOE, onNOEChange }: Props) {
  const [errorText, setErrorText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    if (value <= 0) {
      setErrorText("must be a positive number");
    } else {
      setErrorText("");
      onNOEChange(value);
    }
  };

  return (
    <div>
      <label htmlFor="number-of-events">Number of events</label>

      <input
        id="number-of-events"
        type="number"
        defaultValue={currentNOE}
        onChange={handleChange}
      />

      {errorText && <p>{errorText}</p>}
    </div>
  );
}