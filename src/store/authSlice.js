import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: 'auth',
  initialState:{ isLoggedIn:false },
  reducers: {
    login(state) {
      // Đăng nhập thành công
      state.isLoggedIn = true;
    },
    logout(state) {
      // Đăng xuất thành công
      state.isLoggedIn = false;
    },
  }
})
export const authActions = authSlice.actions;

export default authSlice;