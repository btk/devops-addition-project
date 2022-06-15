import Home from "./pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Addition app", () => {
  it("renders a calculator", () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("op1")).toBeInTheDocument();
    expect(screen.getByTestId("op2")).toBeInTheDocument();
    expect(screen.getByTestId("calculate")).toBeInTheDocument();
  });
});
