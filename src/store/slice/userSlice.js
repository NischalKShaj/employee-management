// file to create the user slice

// importing the required modules
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    // for signup
    signupdata: (state, action) => {
      const { username, email, password, gender, role, age } = action.payload;
      const existingUser = state.users.find((user) => user.email === email);
      if (existingUser) {
        throw new Error("user already exists");
      }

      state.users.push({ username, email, password, gender, age, role });
    },

    // for login
    login: (state, action) => {
      const { email, password } = action.payload;
      const existingUser = state.users.find(
        (user) => user.email === email && user.password === password
      );
      if (!existingUser) {
        throw new Error("user does not exist");
      }
      state.currentUser = existingUser;
    },

    // for logout
    logout: (state) => {
      state.currentUser = null;
    },

    // for updating
    updateUser: (state, action) => {
      const { email, updates } = action.payload;
      const userIndex = state.users.findIndex((user) => user.email === email);

      if (userIndex === -1) {
        throw new Error("User does not exist");
      }

      state.users[userIndex] = { ...state.users[userIndex], ...updates };

      if (state.currentUser && state.currentUser.email === email) {
        state.currentUser = { ...state.currentUser, ...updates };
      }
    },
  },
});

export const { signupdata, login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
