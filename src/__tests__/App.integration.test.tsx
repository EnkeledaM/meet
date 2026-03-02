import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("user can select a city and see events in that city", async () => {
  const user = userEvent.setup();

  render(<App />);

  // gjej input-in për qytetin
  const input = screen.getByLabelText(/search city/i);

  // shkruaj "Berlin"
  await user.type(input, "Berlin");

  // tani duhet të shfaqet sugjerimi si BUTTON
  const berlinButton = await screen.findByRole("button", {
    name: /berlin, germany/i,
  });

  // kliko Berlin
  await user.click(berlinButton);

  // kontrollo që në faqe shfaqen evente për Berlin (përshtate me tekstet e tua reale)
  expect(screen.getByText(/berlin, germany/i)).toBeInTheDocument();
});