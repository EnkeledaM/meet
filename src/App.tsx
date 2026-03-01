import { useMemo, useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";

export type EventItem = {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
};

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

function App() {
  const [city, setCity] = useState<string>("all");

  const filteredEvents = useMemo(() => {
    if (city === "all") return allEvents;
    return allEvents.filter((e) => e.location === city);
  }, [city]);

  return (
    <div>
      <h1>Meet App</h1>

      <CitySearch
        allLocations={[...new Set(allEvents.map((e) => e.location))]}
        onCitySelect={setCity}
      />

      <EventList events={filteredEvents} />
    </div>
  );
}

export default App;