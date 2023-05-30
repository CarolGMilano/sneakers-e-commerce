"use client";

import { createSlice } from "@reduxjs/toolkit";

interface IImageDialog {
  isOpen: boolean
}

let initialState: IImageDialog = {
  isOpen: false
};

const imageDialogSlice = createSlice({
  name: "imageDialog",
  initialState,
  reducers: {
    openImageDialog: (state) => {
      state.isOpen = true;
    },
    closeImageDialog: (state) => {
      state.isOpen = false;
    }   
  }
})

export const { openImageDialog, closeImageDialog } = imageDialogSlice.actions;
export default imageDialogSlice.reducer;