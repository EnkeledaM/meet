import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CitySearch from "../components/CitySearch";

describe("CitySearch component", () => {
  const locations = [
    "Berlin, Germany",
    "Munich, Germany",
    "Hamburg, Germany",
  ];

  test("renders input field", () => {
    render(<CitySearch allLocations={locations} onCitySelect={() => {}} />);
    const input = screen.getByLabelText(/search city/i);
    expect(input).toBeInTheDocument();
  });

  test("shows suggestions when typing", async () => {
    render(<CitySearch allLocations={locations} onCitySelect={() => {}} />);

    const input = screen.getByLabelText(/search city/i);
    await userEvent.type(input, "Ber");

    const suggestion = await screen.findByText("Berlin, Germany");
    expect(suggestion).toBeInTheDocument();
  });
});