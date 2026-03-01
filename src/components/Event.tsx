type Props = {
  title: string;
  location: string;
  date: string;
  description: string;
};

export default function Event({ title, location, date, description }: Props) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{date}</p>
      <p>{description}</p>
    </li>
  );
}