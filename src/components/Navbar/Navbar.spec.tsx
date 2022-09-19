import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import Navbar from "./Navbar";

export interface IMockNavbarTest {
  children: ReactNode;
}

it("should render title of project", () => {
  render(<Navbar />);
  const ele = screen.getByText(/Github Profile App/i);
  expect(ele).toBeInTheDocument();
});
