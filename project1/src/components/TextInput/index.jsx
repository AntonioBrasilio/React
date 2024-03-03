import P from "prop-types";

import "./styles.css";

export const TextInput = ({ searchValue, handleChange }) => {
    return (
        <input
            data-testid="textinput-test-id"
            placeholder="Type your search"
            value={searchValue}
            onChange={handleChange}
            type="search"
        />
    );
};

TextInput.propTypes = {
    searchValue: P.string.isRequired,
    handleChange: P.func.isRequired,
};
