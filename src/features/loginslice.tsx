import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState: any = {
  check: {
    admin: false,
    user: false,
  },
  admin: {
    email: "123@gmail.com",
    password: "123",
  },
  user: {
    email: "456@gmail.com",
    password: "456",
  },
  type: {
    catType: "",
  },
  adminAddData: {
    data: [],
  },
  userAddData: {
    data: [],
  },
};

export const passwordCheck = createSlice({
  name: "passwordcheck",
  initialState,

  reducers: {
    checkadmin: (state, action) => {
      action.payload.email === state.admin.email &&
      action.payload.password === state.admin.password
        ? (state.check.admin = true)
        : (state.check.admin = false);
    },
    checkuser: (state, action) => {
      action.payload.email === state.user.email &&
      action.payload.password === state.user.password
        ? (state.check.user = true)
        : (state.check.user = false);
    },
    addType: (state, action) => {
      state.type.catType = action.payload;
    },
    adminadddata: (state, action) => {
      state.adminAddData.data = action.payload;
      console.log(state.userAddData.data, 1111111);
    },
    useradddata: (state, action) => {
      state.userAddData.data = action.payload;
      console.log(state.userAddData.data, 1111111);
    },
  },
});

export const { checkadmin, checkuser, addType, adminadddata, useradddata } =
  passwordCheck.actions;
export default passwordCheck.reducer;
