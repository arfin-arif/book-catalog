import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  email: string;
  password: string;
}

interface UserState {
  isLoggedIn: boolean;
  user: User | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  // extraReducers:
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
