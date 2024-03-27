import * as types from './types';

export const incrementCounter = (dispatch, payload) => {
    dispatch({ type: types.INCREMENT_DATA, payload });
};

export const decremmentCounter = (dispatch, payload) => {
    dispatch({ type: types.DECREMENT_DATA, payload });
};