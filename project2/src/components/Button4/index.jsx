import P from "prop-types";
import { useContext } from "react";
import { GlobalContext } from "../contexts/AppContext/index";

export const Button4 = () => {
    const context = useContext(GlobalContext);
    const { dispatch } = context;

    return (
        <>
            <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
                + (4)
            </button>
            <button onClick={() => dispatch({ type: "decrement", payload: 3 })}>
                - (4)
            </button>
        </>
    );
};

export const Counter4Value = () => {
    const context = useContext(GlobalContext);
    return context.state.counter4;
};

Button4.propTypes = {
    incrementButton: P.func,
};
