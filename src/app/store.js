/** @format */

import { configureStore } from "@reduxjs/toolkit";

import { reducer as postsReducer } from "../features/posts/postsSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
