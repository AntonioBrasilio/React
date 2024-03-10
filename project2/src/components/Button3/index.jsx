import P from "prop-types";

export const Button3 = ({ incrementButton }) => {
    return <button onClick={() => incrementButton(100)}>+ (3)</button>;
};

Button3.propTypes = {
    incrementButton: P.func,
};
