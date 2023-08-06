import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postAPI} from "../services/StoryService";
import {commentAPI} from "../services/CommentService";

const rootReducer = combineReducers({
  [postAPI.reducerPath]: postAPI.reducer,
  [commentAPI.reducerPath]: commentAPI.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(postAPI.middleware, commentAPI.middleware))
  })
}
