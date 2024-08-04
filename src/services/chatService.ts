import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface CreateChatDataI {
  creatorEmail: string;
  friendEmail: string;
}

export interface CreateChatResponseI {
  room: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ChatItemI {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}
export interface ChatsResponseI {
  rooms: ChatItemI[];
}

export interface UserI {
  id: number;
  authId: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;  
}

export interface MessageI {
  id: number;
  text: string;
  authId: string;
  roomId: number;
  createdAt: string;
  user: UserI;
}

export interface MessageResponseI {
  messages: MessageI[];
}
type AsyncThunkConfig = {
  rejectValue: string;
};

export const createChat = async (createChatData: CreateChatDataI): Promise<CreateChatResponseI> => {
  try {
    const createChatResponse = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/room/create`, {
      user1: {
        email: createChatData.creatorEmail,
      },
      user2: {
        email: createChatData.friendEmail,
      },
    });
    return createChatResponse.data;
  } catch {
    throw new Error("Chat creation was failed");
  }
};

export const getAllChats = async (authId: string): Promise<ChatsResponseI> => {
  try {
    const chatsResponse = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/room/all-rooms`, {
      params: {
        authId: authId,
      },
    });
    return chatsResponse.data;
  } catch (error) {
    throw new Error("Failed to get chats");
  }
};

export const getAllChatMessages = async (roomId: number): Promise<MessageResponseI> => {
  try {
    const messagesResponse = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/chat/history`, {
      params: {
        roomId: roomId,
      },
    });
    return messagesResponse.data;
  } catch (error) {
    throw new Error("Failed to get messages");
  }
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