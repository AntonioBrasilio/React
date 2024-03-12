export const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, counter4: state.counter4 + action.payload };
        case "decrement":
            return { ...state, counter4: state.counter4 - action.payload };
        case "incrementButton1":
            return { ...state, counter1: state.counter1 + action.payload };

        default:
            return { ...state };
    }
};
