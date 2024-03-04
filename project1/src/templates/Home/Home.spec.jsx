import {
    render,
    screen,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import { Home } from ".";

describe("Home", () => {
    it("should render search, posts and load more button", async () => {
        render(<Home />);
        const noMorePosts = screen.getByText("No more posts");

        await waitForElementToBeRemoved(noMorePosts);

        const search = screen.getByPlaceholderText(/type your search/i);
        expect(search).toBeInTheDocument();

        const images = screen.getAllByRole("img");
        expect(images).toHaveLength(10);
    });
});
