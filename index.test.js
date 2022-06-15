import Home from "./pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Addition app", () => {
  it("renders a calculator", () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByTestId("op1")).toBeInTheDocument();
    expect(screen.getByTestId("op2")).toBeInTheDocument();
    expect(screen.getByTestId("calculate")).toBeInTheDocument();
  });

  it("does basic addition", async () => {
    render(<Home />);
    const op1input = screen.getByTestId("op1");
    const op2input = screen.getByTestId("op2");
    const addButton = screen.getByTestId("calculate");
    const resultArea = screen.getByTestId("resultArea");
    fireEvent.change(op1input, { target: { value: 50 } });
    fireEvent.change(op2input, { target: { value: 80 } });
    addButton.click();
    expect(resultArea).toHaveTextContent("14");
  });
});
