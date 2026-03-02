import { useState } from "react";

type Props = {
  title: string;
  location: string;
  date: string;
  description: string;
};

export default function Event({ title, location, date, description }: Props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{date}</p>

      <button onClick={() => setShowDetails((prev) => !prev)}>
        {showDetails ? "Hide details" : "Show details"}
      </button>

      {showDetails && <p>{description}</p>}
    </li>
  );
}
