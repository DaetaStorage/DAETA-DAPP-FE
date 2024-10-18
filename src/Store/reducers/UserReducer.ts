import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token: null,
  isLoaded: false,
  isAuthenticated: false,
  user: null,
  files: null,
  vault: null,
};

export const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.vault = null;
    },
    setFiles: (state, action) => {
      state.files = action.payload;
    },
    setVault: (state, action) => {
      state.vault = action.payload;
    },
  },
});

export const { setUser, setToken, clearUser, setFiles, setVault } =
  UserReducer.actions;

export default UserReducer.reducer;
