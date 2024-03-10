import { useState, createContext } from "react";
import { globalState } from "./data";
import P from "prop-types";

export const GlobalContext = createContext();

export const AppContext = ({ children }) => {
    const [state, setState] = useState(globalState);

    return (
        <GlobalContext.Provider value={{ state, setState }}>
            {children}
        </GlobalContext.Provider>
    );
};

AppContext.propTypes = {
    children: P.node,
};
