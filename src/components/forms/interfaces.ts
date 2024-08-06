
export interface SignupResponseI {
  user: {
    authId: string;
    email: string;
    username: string;
  };
}
export interface LoginFormI {
  email: string;
  password: string;
}

export interface CreateChatFormI {
  email: string;
}

export interface SignupFormI {
  name: string;
  email: string;
  password: string;
}

export interface SendMessageFormI {
  authId: string;
  message: string;
}

export interface EditFormI {
  name: string;
  email: string;
  currentPassword: string;
  password: string;
}

