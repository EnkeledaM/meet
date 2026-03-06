import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";

const mockEvent = {
  title: "React Meetup Berlin",
  location: "Berlin, Germany",
  date: "2026-03-01",
  description: "A meetup about React and hooks.",
};

describe("Feature 2: Show/Hide Event Details", () => {
  test("event is collapsed by default", () => {
    render(<Event {...mockEvent} />);
    expect(screen.queryByText(/react and hooks/i)).not.toBeInTheDocument();
  });

  test("shows details when 'Show details' is clicked", async () => {
    const user = userEvent.setup();
    render(<Event {...mockEvent} />);

    const button = screen.getByRole("button", { name: /show details/i });
    await user.click(button);

    expect(screen.getByText(/react and hooks/i)).toBeInTheDocument();
  });

  test("hides details when 'Hide details' is clicked", async () => {
    const user = userEvent.setup();
    render(<Event {...mockEvent} />);

    const button = screen.getByRole("button", { name: /show details/i });
    await user.click(button);

    const hideButton = screen.getByRole("button", { name: /hide details/i });
    await user.click(hideButton);

    expect(screen.queryByText(/react and hooks/i)).not.toBeInTheDocument();
  });
});