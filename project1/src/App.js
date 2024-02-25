import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
    state = {
        name: "Antonio Brasilio",
        counter: 0,
    };
    handlePClick = () => {
        console.log(this);
        this.setState({ name: "Aysla", date: "teste" });
    };

    handleAClick = (event) => {
        event.preventDefault();
        const { counter } = this.state;
        this.setState({ counter: counter + 1 });
    };

    render() {
        const { name, counter } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p onClick={this.handlePClick}>
                        {name} e esse é o número agora {counter}
                    </p>
                    <a
                        onClick={this.handleAClick}
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Link
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
