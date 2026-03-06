import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import NOE from "../components/NOE";

describe("<NOE />", () => {
  test("renders the input field with the correct value", () => {
    render(<NOE currentNOE={32} onNOEChange={() => {}} />);

    const input = screen.getByLabelText(/number of events/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(32);
  });

  test("calls onNOEChange when user changes the number", async () => {
    const user = userEvent.setup();
    const onNOEChange = vi.fn();

    render(<NOE currentNOE={32} onNOEChange={onNOEChange} />);

    const input = screen.getByLabelText(/number of events/i);
    await user.clear(input);
    await user.type(input, "10");

    expect(onNOEChange).toHaveBeenCalledWith(10);
  });

  test("shows an error for invalid input", async () => {
    const user = userEvent.setup();

    render(<NOE currentNOE={32} onNOEChange={() => {}} />);

    const input = screen.getByLabelText(/number of events/i);
    await user.clear(input);
    await user.type(input, "0");

    expect(screen.getByText(/must be a positive number/i)).toBeInTheDocument();
  });
});