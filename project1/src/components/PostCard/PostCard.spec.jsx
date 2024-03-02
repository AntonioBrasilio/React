import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { PostCardPropsMock } from "./mock";

const props = PostCardPropsMock;

describe("<PostCard />", () => {
    it("should render PostCard correctly in the screen", () => {
        expect.assertions(3);

        render(<PostCard {...props} />);

        expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
            "src",
            props.cover
        );

        expect(
            screen.getByRole("heading", { name: props.title })
        ).toBeInTheDocument();

        expect(screen.getByText(props.body)).toBeInTheDocument();
    });

    it("should match snapshot", () => {
        expect.assertions(1);

        render(<PostCard {...props} />);
        expect(screen.getByTestId('post-card-test-id')).toMatchSnapshot();
    });
});
