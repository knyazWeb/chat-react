import axios from "axios";

interface CreateChatDataI {
  creatorEmail: string;
  friendEmail: string;
}
export const createChat = async (createChatData: CreateChatDataI) => {
  try {
    const createChatResponse = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/room/create`, {
      user1: {
        email: createChatData.creatorEmail,
      },
      user2: {
        email: createChatData.friendEmail,
      },
    });
    return createChatResponse;
  } catch {
    throw new Error("Chat creation was failed");
  }
};

export const getAllChats = async (authId: string) => {
  try {
    const chats = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/room/all-rooms`, {
      params: {
        authId: authId,
      },
    });
    return chats.data;
  } catch (error) {
    throw new Error("Failed to get chats");
  }
};
