import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 3,
  price: 1089,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state) => {
      state.count++
    },
    removeItem: (state) => {
      state.count--
    },
  }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions