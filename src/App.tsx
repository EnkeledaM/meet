import { useMemo, useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NOE from "./components/NOE";

type EventItem = {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
};

export default function App() {
  const allEvents: EventItem[] = [
    {
      id: 1,
      title: "React Meetup Berlin",
      location: "Berlin, Germany",
      date: "2026-03-01",
      description: "A meetup about React, hooks, and component architecture.",
    },
    {
      id: 2,
      title: "JavaScript Conference Munich",
      location: "Munich, Germany",
      date: "2026-03-10",
      description: "Talks and workshops about modern JavaScript and tooling.",
    },
    {
      id: 3,
      title: "Tech Meetup Hamburg",
      location: "Hamburg, Germany",
      date: "2026-03-20",
      description: "Networking + tech talks about web development and cloud.",
    },
  ];

  const allLocations = [...new Set(allEvents.map((e) => e.location))];

  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [currentNOE, setCurrentNOE] = useState<number>(32);

  const filteredEvents = useMemo(() => {
    const cityFiltered =
      selectedCity === "all"
        ? allEvents
        : allEvents.filter((e) => e.location === selectedCity);

    return cityFiltered.slice(0, currentNOE);
  }, [selectedCity, currentNOE]);

  return (
    <div>
      <h1>Meet App</h1>

      <CitySearch
        allLocations={allLocations}
        onCitySelect={setSelectedCity}
      />

      <NOE
        currentNOE={currentNOE}
        onNOEChange={setCurrentNOE}
      />

      <EventList events={filteredEvents} />
    </div>
  );
}