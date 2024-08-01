import { createSlice } from "@reduxjs/toolkit";
import { UserChatI } from "../interfaces";

const initialState: UserChatI[] = []

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChat: (state, action) => {
      state.push(action.payload);
    }
  }
})


export const {addChat} = chatsSlice.actions
export const chatsReducer = chatsSlice.reducer