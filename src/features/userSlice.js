import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      console.log(action.payload);
    },
    logout(state, action) {
      //logout
    },
    register(state, action) {
      //register
    },
  },
});

export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;
