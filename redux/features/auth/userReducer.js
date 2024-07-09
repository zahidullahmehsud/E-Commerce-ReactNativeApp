import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({ token: null }, (builder) => {
  // LOGIN CASE
  builder.addCase("loginRequest", (state, action) => {
    state.loading = true;
  });
  builder.addCase("logingSucess", (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
    state.isAuth = true;
    state.token = action.payload.token;
  });
  builder.addCase("loginFail", (state, action) => {
    state.isAuth = false;
    state.error = action.payload;
  });
  // ERROR MESSAGE CASE
  builder.addCase("clearError", (state) => {
    state.error = null;
  });
  builder.addCase("clearMessage", (state) => {
    state.message = null;
  });
  //REGISTER
  builder.addCase("registerRequest", (state, action) => {
    state.loading = true;
  });
  builder.addCase("registerSucess", (state, action) => {
    state.loading = false;
    // state.isAuth = true;
    state.message = action.payload;
  });
  builder.addCase("registerFail", (state, action) => {
    state.isAuth = false;
    state.error = action.payload;
  });
  //  GET USER DATA
  builder.addCase("getUserDataRequest", (state, action) => {
    state.loading = true;
  });
  builder.addCase("getUserDataSucess", (state, action) => {
    state.loading = false;
    state.isAuth = true;
    state.user = action.payload;
  });
  builder.addCase("getUserDataFail", (state, action) => {
    state.isAuth = false;
    state.error = action.payload;
  });
  // LOGOUT
  builder.addCase("logoutRequest", (state, action) => {
    state.loading = true;
  });
  builder.addCase("logoutSucess", (state, action) => {
    state.loading = false;
    state.isAuth = false;
    state.user = null;
    state.message = action.payload;
  });
  builder.addCase("logoutFail", (state, action) => {
    state.isAuth = false;
    state.error = action.payload;
  });
});
