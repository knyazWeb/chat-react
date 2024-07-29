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
    return createChatResponse
  } catch {
    throw new Error("Chat creation was failed");
  }
};
