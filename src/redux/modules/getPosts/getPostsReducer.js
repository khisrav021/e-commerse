const defaultValue = {
    loading: false,
    error: false,
    errorMessage: false,
    success: false,
    posts: [],
}

export const getPostsReducer = (state = defaultValue, action) => {

    switch (action.type) {
        case "GET_POSTS_LOADING":
            state.loading = true;
            break;
        case "GET_POSTS_SUCCES":
            state.loading = false
            state.success = true;
            state.posts = action.payload;
            break;
        case "GET_POSTS_ERROR":
            state.error = true;
            state.errorMessage = action.payload;
            break;
        default:
            break;
    }
    return state
}