import { cartReducer } from "@/services/redux/cart";
import { promoReducer } from "@/services/redux/promo";
import { userInfoReducer } from "@/services/redux/userInfo";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    userInfo: userInfoReducer,
    promo: promoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>