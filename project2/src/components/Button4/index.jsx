import P from "prop-types";
import { actions } from "../reducer/actions";
import { useContext } from "react";
import { GlobalContext } from "../contexts/AppContext/index";

export const Button4 = () => {
    const context = useContext(GlobalContext);
    const { dispatch } = context;

    const increment = (payload) => {
        dispatch({ type: actions.INCREMENT, payload });
    };
    const decrement = (payload) => {
        dispatch({ type: actions.DECREMENT, payload });
    };

    return (
        <>
            <button onClick={() => increment(2)}>+ (4)</button>
            <button onClick={() => decrement(3)}>- (4)</button>
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
