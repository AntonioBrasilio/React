import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from ".";

describe("<TextInput />", () => {
    it("should have a value on searchValue props", () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} searchValue={"mock-value"} />);

        const input = screen.getByPlaceholderText(/type your search/i);

        expect(input).toBeInTheDocument();
        expect(input.value).toBe("mock-value");
    });

    it("should call handleChange function on each key pressed", () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} searchValue={"mock-value"} />);

        const input = screen.getByPlaceholderText(/type your search/i);
        const value = "mock-value";
        userEvent.type(input, value);

        expect(input.value).toBe(value);
        expect(fn).toHaveBeenCalledTimes(value.length);
    });

    it("should match snapshot", () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} searchValue={"mock-value"} />);

        expect(screen.getByTestId("textinput-test-id")).toMatchSnapshot();
    });
});
