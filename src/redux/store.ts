"use client";

import { configureStore } from "@reduxjs/toolkit";

import menuSlice from "./reducers/menu";
import sneakersSlice from "./reducers/seasons";
import imageDialogSlice from "./reducers/imageDialog";
import cartSlice from "./reducers/cart";
import formEmailSlice from "./reducers/formEmail";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    sneakers: sneakersSlice,
    imageDialog: imageDialogSlice,
    cart: cartSlice,
    formEmail: formEmailSlice
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
