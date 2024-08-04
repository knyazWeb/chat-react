import { createSlice } from "@reduxjs/toolkit";
import { ChatItemI, fetchChats } from "@/services";

const initialState: ChatItemI[] = [];





export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChat: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChats.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});

export const { addChat } = chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;
