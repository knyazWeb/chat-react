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
