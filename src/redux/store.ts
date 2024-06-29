import { configureStore } from "@reduxjs/toolkit";
// import logger from "./middleware/logger";
import todoReducer from "./features/todo/todoSlice";
import { baseApi } from "./api/api";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  // middleware: (getDefaultMiddleware: any) =>
  //   getDefaultMiddleware().concat(logger),
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  // devTools:false, // production deyar somoy eta false korle tarminal a redux er devtools dekhte parbe nah
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
