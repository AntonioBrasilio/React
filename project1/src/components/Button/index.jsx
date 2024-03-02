import "./styles.css";

export const Button = ({ text, onClick, disabled }) => {
    return (
        <button data-testid="button-test-id" disabled={disabled} className="button" onClick={onClick}>
            {text}
        </button>
    );
};
