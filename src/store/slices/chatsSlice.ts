import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ChatItemI, getAllChats } from "@/services";

const initialState: ChatItemI[] = [];

type AsyncThunkConfig = {
  rejectValue: string;
};

export const fetchChats = createAsyncThunk<ChatItemI[], string, AsyncThunkConfig>(
  "chats/fetchChats",
  async (authId, thunkAPI) => {
    try {
      const response = await getAllChats(authId);
      return response.rooms;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to get chats");
    }
  }
);

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChat: (state, action) => {
      state.push(action.payload);
    },
    changeLastMessage: (state, action) => {
      const chat = state.find((chat) => chat.id === action.payload.chatId);
      if (chat) {
        chat.lastMessage = action.payload.lastMessage;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChats.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});

export const { addChat, changeLastMessage } = chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;
