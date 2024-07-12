import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserAuth } from "../interfaces";

const initialState: IUserAuth = {
  userId: null,
  userName: null,
  userEmail: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUserAuth>) => {
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.isAuth = true;
    },
    logout: (state) => {
      state.userId = null;
      state.userName = null;
      state.userEmail = null;
      state.isAuth = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
