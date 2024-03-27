export const reducer = (state, action) => {
    switch (action.type) {
        case 'POST_LOADING':
            console.log('POSTS_LOADING');
            return { ...state, isLoading: true };
        case 'POST_SUCCESS':
            console.log('POSTS_SUCCESS');
            return { ...state, posts: action.payload, isLoading: false };
        default:
            return state;
    }
};
