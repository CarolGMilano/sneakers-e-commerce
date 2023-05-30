"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFormEmail {
  value: string,
  isValidEmail: boolean,
  message: string
}

let initialState: IFormEmail = {
  value: "",
  isValidEmail: false,
  message: ""
};

const formEmailSlice = createSlice({
  name: "formEmail",
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    validEmail: (state, action: PayloadAction<boolean>) => {
      state.isValidEmail = action.payload;
    },
    changeMessage: (state) => {
      if(state.isValidEmail) {
        state.value = ""
        state.message = "Thank you for joining our newsletter!";
      } else {
        state.message = "Oops! Something is wrong. Please check your email address.";
      }
    }
  }
})

export const { changeValue, validEmail, changeMessage } = formEmailSlice.actions;
export default formEmailSlice.reducer;