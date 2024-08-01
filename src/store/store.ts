import { configureStore } from "@reduxjs/toolkit";
import { authReducer, chatsReducer } from "./slices";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chats: chatsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;