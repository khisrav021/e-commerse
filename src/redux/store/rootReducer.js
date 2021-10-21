import { combineReducers } from "redux";
import { getPostsReducer } from "../modules/getPosts/getPostsReducer.js";

export const rootReducer = combineReducers({
    getPostsReducer,
})