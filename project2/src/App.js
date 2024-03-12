import { Button3 } from "./components/Button3";
import { Button1, Counter1Value } from "./components/Button1";
import { AppContext } from "./components/contexts/AppContext";
import "./App.css";
import React, {
    useCallback,
    useEffect,
    useState,
    useMemo,
    useRef,
} from "react";
import { Button4, Counter4Value } from "./components/Button4";

const eventFn = () => {
    console.log("Event");
};

function App() {
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const secondButtonElement = useRef(null);

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
    // useEffect(() => {
    //     console.log("Counter changed", counter1);
    // }, [counter1]);

    const incrementCounter3 = useCallback((num) => {
        setCounter3((c) => c + num);
    }, []);

    return (
        <AppContext>
            <div className="App">
                <p>Test 1</p>
                <h1>
                    C1: <Counter1Value /> C2: {counter2} C3: {counter3} C4:{" "}
                    <Counter4Value />
                </h1>
                <Button1 elementRef={secondButtonElement} />
                <button
                    ref={secondButtonElement}
                    onClick={() => setCounter2(counter2 + 1)}
                >
                    + (2)
                </button>
                {useMemo(() => {
                    return <Button3 incrementButton={incrementCounter3} />;
                }, [incrementCounter3])}
                <Button4 />
            </div>
        </AppContext>
    );
}

export default App;
