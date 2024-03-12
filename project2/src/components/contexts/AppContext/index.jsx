import { useReducer, createContext } from "react";
import { globalState } from "./data";
import { reducer } from "../../reducer/reducer";
import P from "prop-types";

export const GlobalContext = createContext();

export const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, globalState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

AppContext.propTypes = {
    children: P.node,
};
