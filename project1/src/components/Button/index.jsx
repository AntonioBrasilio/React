import "./styles.css";

import { Component } from "react";

export class Button extends Component {

    render() {
        const { text, onClick, disabled } = this.props;

        console.log("Button", this.props);

        return (
            <button disabled={disabled} className="button" onClick={onClick}>
                {text}
            </button>
        );
    }
}
