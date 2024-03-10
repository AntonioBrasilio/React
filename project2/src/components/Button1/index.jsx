import P from "prop-types";
import { useContext } from "react";
import { GlobalContext } from "../contexts/AppContext/index";

export const Button1 = ({ elementRef }) => {
    const context = useContext(GlobalContext);

    const { setState } = context;

    const handleClick = () => {
        setState((s) => ({ ...s, counter1: s.counter1 + 1 }));
        elementRef.current.focus();
    };

    return <button onClick={handleClick}>+</button>;
};

export const Counter1Value = () => {
    const context = useContext(GlobalContext);
    return context.state.counter1;
};

Button1.propTypes = {
    elementRef: P.object,
};
