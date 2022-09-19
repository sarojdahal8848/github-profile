import { render, screen } from "@testing-library/react";
import CustomPanel from "./CustomPanel";
import UserEvent from "@testing-library/user-event";

const val = {
  full_name: "saroj",
  html_url: "http://example.com",
  language: "typescript",
  forks: 6,
  stargazers_count: 3,
};

describe("Render different field values", () => {
  beforeEach(() => {
    render(<CustomPanel val={val} />);
  });

  it("should render full name", () => {
    const el = screen.getByText(val.full_name);
    expect(el).toBeInTheDocument();
  });

  it("should render language", () => {
    const el = screen.getByText(val.language);
    expect(el).toBeInTheDocument();
  });

  it("should render forks", () => {
    const el = screen.getByText(`Forks: ${val.forks}`);
    expect(el).toBeInTheDocument();
  });

  it("should render stars", () => {
    const el = screen.getByText(`Stars: ${val.stargazers_count}`);
    expect(el).toBeInTheDocument();
  });

  it("should have href to link", () => {
    const el = screen.getByText(val.full_name);
    UserEvent.click(el);
    expect(el.closest("a")).toHaveAttribute("href", val.html_url);
  });
});
