import * as types from './types';

export const loadPosts = async (dispatch) => {
    dispatch({ type: types.POST_LOADING });
    setTimeout(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch({ type: types.POST_SUCCESS, payload: data });
    }, 5000);
};
