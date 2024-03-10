import P from "prop-types";

export const Button = ({ incrementButton }) => {
    return <button onClick={() => incrementButton(100)}>+ (3)</button>;
};

Button.propTypes = {
    incrementButton: P.func,
};
