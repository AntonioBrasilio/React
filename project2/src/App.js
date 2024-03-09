import P from "prop-types";
import "./App.css";
import React, { useCallback, useEffect, useState, useMemo } from "react";

const eventFn = () => {
    console.log("Event");
};

const Button = ({ incrementButton }) => {
    return <button onClick={() => incrementButton(100)}>+</button>;
};

Button.propTypes = {
    incrementButton: P.func,
};

function App() {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);

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

    const incrementCounter3 = useCallback((num) => {
        setCounter3((c) => c + num);
    }, []);

    return (
        <div className="App">
            <p>Test 1</p>
            <h1>
                C1: {counter} C2: {counter2} C3: {counter3}
            </h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>
            {useMemo(() => {
                <Button incrementButton={incrementCounter3} />;
            }, [incrementCounter3])}
        </div>
    );
}

export default App;
