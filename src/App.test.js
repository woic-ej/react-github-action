import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  const counterElemnt = screen.getByTestId("counter");
  expect(counterElemnt).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App />);

  const buttonElemnt = screen.getByTestId("minus-button");
  expect(buttonElemnt).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);

  const buttonElemnt = screen.getByTestId("plus-button");
  expect(buttonElemnt).toHaveTextContent("+");
});

test("when the + button us pressed, the counter changes to 1", () => {
  render(<App />);
  const buttonElemnt = screen.getByTestId("plus-button");
  fireEvent.click(buttonElemnt);
  const counterElemnt = screen.getByTestId("counter");
  expect(counterElemnt).toHaveTextContent(1);
});

test("on/off button has blue color", () => {
  render(<App />);
  const buttonElemnt = screen.getByTestId("on/off-button");
  expect(buttonElemnt).toHaveStyle({ backgroundColor: "blue" });
});

test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
});
