import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: 'Краснодар',
  points: 174,
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    addPoints: (state) => {
      state.points++
    },
    removePoints: (state) => {
      state.points--
    },
    changeCity: (state, action) => {
      state.city = action.payload
    }
  }
})

export const userInfoReducer = userInfoSlice.reducer
export const userInfoActions = userInfoSlice.actions