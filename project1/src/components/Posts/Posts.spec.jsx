import { render, screen } from "@testing-library/react";
import { Posts } from ".";

const props = {
    posts: [
        {
            id: 1,
            title: "mock-title-1",
            body: "mock-body-1",
            cover: "img/mock-img-1.png",
        },
        {
            id: 2,
            title: "mock-title-2",
            body: "mock-body-2",
            cover: "img/mock-img-2.png",
        },
        {
            id: 3,
            title: "mock-title-3",
            body: "mock-body-3",
            cover: "img/mock-img-3.png",
        },
    ],
};

describe("<Posts />", () => {
    it("should render the posts properties correctly", () => {
        render(<Posts {...props} />);

        expect(
            screen.getAllByRole("heading", { name: /mock-title/i })
        ).toHaveLength(3);
        expect(screen.getAllByRole("img", { name: /mock-title/i })).toHaveLength(
            3
        );
        expect(screen.getAllByText(/mock-body/i)).toHaveLength(3);
    });

    it("should not render posts", () => {
        render(<Posts  />);
        expect(
            screen.queryByRole("heading", { name: /mock-title/i })
        ).not.toBeInTheDocument();
    });

    it("should match snapshot", () => {
        render(<Posts {...props} />);
        expect(screen.getByTestId("posts-test-id")).toMatchSnapshot();
    });
});
