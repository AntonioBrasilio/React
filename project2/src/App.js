import "./App.css";
import { useEffect, useState } from "react";

const eventFn = () => {
    console.log("Event");
};

function App() {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    // Executes only the first time the component is rendered
    useEffect(() => {
        console.log("First render");
        document.querySelector("h1")?.addEventListener("click", eventFn);

        // Clean up function, executes when the component is unmounted
        return () => {
            console.log("Component unmount");
            document.querySelector("h1")?.removeEventListener("click", eventFn);
        };
    }, []);

    // Executes every time the component is rendered
    // useEffect(() => {
    //     console.log("Update render");
    // });

    // Executes only when the dependencies changes
    useEffect(() => {
        console.log("Counter changed", counter);
    }, [counter]);

    return (
        <div className="App">
            <p>Test s</p>
            <h1>
                C1: {counter} C2: {counter2}
            </h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>
        </div>
    );
}

export default App;
