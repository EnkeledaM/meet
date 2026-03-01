import { useState } from "react";

type EventProps = {
  title: string;
  location: string;
  date: string;
  description: string;
};

export default function Event({ title, location, date, description }: EventProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{date}</p>

      {!showDetails ? (
        <button onClick={() => setShowDetails(true)}>Show details</button>
      ) : (
        <>
          <p>{description}</p>
          <button onClick={() => setShowDetails(false)}>Hide details</button>
        </>
      )}
    </li>
  );
}