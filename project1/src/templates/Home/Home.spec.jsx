import {
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Home } from ".";

describe("Home", () => {
    it("should render search, posts and load more button", async () => {
        render(<Home />);
        const noMorePosts = screen.getByText("No more posts");

        await waitForElementToBeRemoved(noMorePosts);

        expect.assertions(3);

        const search = screen.getByPlaceholderText(/type your search/i);
        expect(search).toBeInTheDocument();

        const images = screen.getAllByRole("img");
        expect(images).toHaveLength(10);

        const button = screen.getByRole("button", { name: /load more/i });
        expect(button).toBeInTheDocument();
    });

    it("should search for posts", async () => {
        render(<Home />);
        const noMorePosts = screen.getByText("No more posts");

        await waitForElementToBeRemoved(noMorePosts);

        expect.assertions(7);

        const search = screen.getByPlaceholderText(/type your search/i);
        expect(screen.getAllByRole("heading")).toHaveLength(10);
        expect(
            screen.queryByText(/et ea vero quia laudantium autem/i),
        ).not.toBeInTheDocument();

        userEvent.type(search, "et ea vero quia laudantium autem");
        expect(screen.getAllByRole("heading")).toHaveLength(2);
        expect(
            screen.getByRole("heading", {
                name: /search value: et ea vero quia laudantium autem/i,
            }),
        ).toBeInTheDocument();

        userEvent.clear(search);
        expect(screen.getAllByRole("heading")).toHaveLength(10);
        expect(
            screen.queryByText(/et ea vero quia laudantium autem/i),
        ).not.toBeInTheDocument();

        userEvent.type(search, "testtesttesttesttest");
        expect(screen.getByText("No more posts")).toBeInTheDocument();
    });

    it("should load more posts when button is clicked", async () => {
        render(<Home />);
        const noMorePosts = screen.getByText("No more posts");

        await waitForElementToBeRemoved(noMorePosts);

        const button = screen.getByRole("button", { name: /load more/i });
        userEvent.click(button);
        waitFor(() => {
            expect(screen.getAllByRole("heading")).toHaveLength(20);
        });

        for (let i = 0; i < 9; i++) {
            userEvent.click(button);
        }
        waitFor(() => {
            expect(button).toBeDisabled();
        });
    });
});
