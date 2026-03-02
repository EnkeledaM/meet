import Event from "./Event";

type EventItem = {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
};

type Props = {
  events: EventItem[];
};

export default function EventList({ events }: Props) {
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