import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe("<Button />", () => {
    it("should render a button with text 'Load more'", () => {
        expect.assertions(1);

        render(<Button text="Load more" />);

        const button = screen.getByRole("button", { name: /load more/i });
        expect(button).toBeInTheDocument();
    });

    it("should call a function on button click", () => {
        expect.assertions(1);

        const fn = jest.fn();

        render(<Button text="Load more" onClick={fn} />);

        const button = screen.getByRole("button", { name: /load more/i });
        userEvent.click(button);
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it("should disable button when disabled option is true", () => {
        expect.assertions(1);

        render(<Button text="Load more" disabled={true} />);

        const button = screen.getByRole("button", { name: /load more/i });
        expect(button).toBeDisabled();
    });

    it("should enable button when disabled option is false", () => {
        expect.assertions(1);

        render(<Button text="Load more" disabled={false} />);

        const button = screen.getByRole("button", { name: /load more/i });
        expect(button).toBeEnabled();
    });

    it("should match snapshot", () => {
        expect.assertions(1);

        const fn = jest.fn();

        render(<Button text="Load more" onClick={fn} disabled={false} />);

        expect(screen.getByTestId("button-test-id")).toMatchSnapshot();
    });
});
