import {
    DELETE,
    FETCH_ALL,
    FETCH_POST,
    UPDATE,
    LIKE,
    COMMENT,
    CREATE,
    FETCH_BY_SEARCH,
    START_LOADING,
    END_LOADING
} from "../constants/actionTypes";

export default (state = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload };
        case FETCH_POST:
            return { ...state, post: action.payload };
        case LIKE:
        case UPDATE:
            return { ...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post) };
        case COMMENT:
            return {
                 ...state, 
                 posts: state.posts.map((post) => {
                     if (post._id === action.payload._id) return action.payload;
                     return post;
                 }),
                };
        case CREATE:
            return { ...state, posts: [...state.posts, action.payload] };
        case DELETE:
            return { ...state.posts.filter((post) => post._id !== action.payload) };
        default:
            return state;
    }
}