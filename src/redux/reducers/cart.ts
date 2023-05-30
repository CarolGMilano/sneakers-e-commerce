"use client";

import { createSlice } from "@reduxjs/toolkit";

interface ICart {
  isOpen: boolean
}

let initialState:ICart = {
  isOpen: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeCart: (state) => {
      state.isOpen = !state.isOpen;
    }
  },
})

export const { changeCart } = cartSlice.actions;
export default cartSlice.reducer;