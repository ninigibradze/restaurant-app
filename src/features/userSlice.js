import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      localStorage.setItem("logedInUser", JSON.stringify(action.payload)); 
      state.loggedIn = true;
      state.email = action.payload.email;
      state.password = action.payload.password;      
      return state;  
    },
    logout(state, action) {
      localStorage.removeItem("logedInUser");
      state = initialState;
      return state;
    },
    register(state, action) {
      localStorage.setItem("registeredUser", JSON.stringify(action.payload));
    },
    checkLogIn(state, action) {
      const storedUser = JSON.parse(localStorage.getItem("logedInUser"));
      if (storedUser) {
        state.loggedIn = true;
        state.email = storedUser.email;
        state.password = storedUser.password;
        localStorage.setItem("logedInUser", JSON.stringify(storedUser));
      }
    },
  },
});

export const { login, logout, register, checkLogIn } = userSlice.actions;
export default userSlice.reducer;
