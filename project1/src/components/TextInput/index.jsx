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
