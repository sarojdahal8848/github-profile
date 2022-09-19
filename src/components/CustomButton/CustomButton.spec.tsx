import { render, screen } from "@testing-library/react";
import CustomButton from "./CustomButton";
import userEvent from "@testing-library/user-event";

it("should render button with title", () => {
  render(<CustomButton title="button" />);
  const ele = screen.getByRole("button", { name: /button/i });
  expect(ele).toBeInTheDocument();
});

it("should handle button click event", () => {
  const handleClick = jest.fn();
  render(<CustomButton title="button" onClick={handleClick()} />);
  const ele = screen.getByRole("button", { name: /button/i });
  userEvent.click(ele);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
