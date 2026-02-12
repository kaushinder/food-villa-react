import Contact from "../Contacts";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

describe("Contact Us Page Component Tests", () => {
  // tests will go here
  test("should render Contact component correctly", () => {
    // Test implementation will go here
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // You can add assertions here using
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Contact Us 📞");
  });
  // you can use test instead of it
  it("should render paragraph inside Contact component correctly", () => {
    // Test implementation will go here
    render(<Contact />);

    const p = screen.getByText("📧 Email: kaushindersinghraghav@gmail.com");

    // You can add assertions here using
    expect(p).toBeInTheDocument();
  });

  test("should render button inside Contact component correctly", () => {
    // Test implementation will go here
    render(<Contact />);

    const button = screen.getByRole("button");

    // You can add assertions here using
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Send Message");
  });

  test("should render Contact component correctly", () => {
    // Test implementation will go here
    render(<Contact />);

    const input = screen.getByPlaceholderText("Enter your name");

    // You can add assertions here using
    expect(input).toBeInTheDocument();
  });

  test("should render 2 input boxes on the Contact page", () => {
    // Test implementation will go here
    render(<Contact />);

    // Query all the input boxes
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes.length);

    //  assertions
    expect(inputBoxes.length).toBe(2);
  });
});
