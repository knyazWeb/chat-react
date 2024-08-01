export interface UserAuthI {
  userId: string | null;
  userName: string | null;
  userEmail: string | null;
  isAuth: boolean;
}

export interface UserChatI {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}