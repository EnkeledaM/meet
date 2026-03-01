
function EventList() {
  const events = [
    { id: 1, title: "React Meetup Berlin" },
    { id: 2, title: "JavaScript Conference Munich" },
    { id: 3, title: "Tech Meetup Hamburg" },
  ];

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
