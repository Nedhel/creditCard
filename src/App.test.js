import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { Card } from "./components/Card";

describe("testing for virtual card", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("first view", () => {
        screen.getByText("Generar CVV");
        screen.getByText("Tu Banco");
        screen.getByText("Credito Oro");
        screen.getByText("VISA");
        screen.getByText("1 1 1 1");
    });
    test("mouse hover card", () => {
        fireEvent.mouseOver(screen.getByText("Credito Oro"));
        screen.getByText(/Lorem ipsum/);
    });
    test("generate a cvv number", () => {
        fireEvent.click(screen.getByText("Generar CVV"));
        screen.getByText(/Lorem ipsum/);
        let cvv = screen.getByRole("textbox");
        expect(cvv).not.toBeNaN();
        expect(cvv.value).toHaveLength(3);
    });
});
