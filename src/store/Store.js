import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from "./PostSlice";

const Store = configureStore({
  reducer: {
    posts: PostsReducer,
  },
});

export default Store;
