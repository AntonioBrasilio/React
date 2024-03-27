export const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_DATA':
            return {
                ...state,
                counter: state.counter + action.payload,
            };
        case 'DECREMENT_DATA':
            return {
                ...state,
                counter: state.counter - action.payload,
            };
        default:
            return state;
    }
}