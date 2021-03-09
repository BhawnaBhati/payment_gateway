import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders payment form", () => {
  render(<App />);
  const linkElement = screen.getByText(/Customer Full Name/i);
  expect(linkElement).toBeInTheDocument();
});
