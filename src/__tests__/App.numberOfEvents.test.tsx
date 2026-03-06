import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect } from "vitest";
import App from "../App";

describe("<App /> - Number of Events", () => {
  test("shows a maximum of 32 events by default", async () => {
    render(<App />);
    const items = await screen.findAllByRole("listitem");
    expect(items.length).toBeLessThanOrEqual(32);
  });

  test("user can change the number of events displayed", async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByLabelText(/number of events/i);
    await user.clear(input);
    await user.type(input, "1");

    const items = await screen.findAllByRole("listitem");
    expect(items.length).toBe(1);
  });
});