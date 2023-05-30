"use client";

import { createSlice } from "@reduxjs/toolkit";

interface IMenu {
  isOpen: boolean
}

let initialState: IMenu = {
  isOpen: false
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    }   
  }
})

export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;