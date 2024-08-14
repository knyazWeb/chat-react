import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserAuthI } from "../interfaces";

const initialState: UserAuthI = {
  userId: null,
  userName: null,
  userEmail: null,
  isAuth: false,
  avatarUrl: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserAuthI>) => {
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.avatarUrl = action.payload.avatarUrl;
      state.isAuth = true;
    },
    logout: (state) => {
      state.userId = null;
      state.userName = null;
      state.userEmail = null;
      state.isAuth = false;
      state.avatarUrl = null;
    },
    update: (state, action: PayloadAction<UserAuthI>) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    updateAvatar: (state, action: PayloadAction<{ avatarUrl: string | null }>) => {
      state.avatarUrl = action.payload.avatarUrl;
    },
  },
});

export const { login, logout, update, updateAvatar } = authSlice.actions;
export const authReducer = authSlice.reducer;
