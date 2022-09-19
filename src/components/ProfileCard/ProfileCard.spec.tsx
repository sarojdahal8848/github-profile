import { render, screen } from "@testing-library/react";
import ProfileCard from "./ProfileCard";
import "@testing-library/jest-dom/extend-expect";

const value = {
  login: "sarojdahal8848",
  avatar_url:
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
};
describe("should check presence of different elements", () => {
  beforeEach(() => {
    render(<ProfileCard value={value} />);
  });

  it("should render image", () => {
    const el = screen.getByRole("img");
    expect(el).toHaveAttribute("src", value.avatar_url);
    expect(el).toHaveAttribute("alt", "user-profile");
  });

  it("should render username", () => {
    const el = screen.getByText(value.login);
    expect(el).toBeInTheDocument();
  });
});
