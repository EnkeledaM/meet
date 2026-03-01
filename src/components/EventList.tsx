import Event from "./Event";

type EventItem = {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
};

export default function EventList() {
  const events: EventItem[] = [
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

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <Event
            key={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            description={event.description}
          />
        ))}
      </ul>
    </div>
  );
}
