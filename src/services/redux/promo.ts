import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid4 } from 'uuid'

const initialState:Card[] = [
  {
    title: 'Скидка 10% в день рождения',
    description: 'Акция не распространяется на сеты, комбо наборы, нагетсы, фри.',
    image: '/promoexample.png',
    id: uuid4()
  },
  {
    title: 'Скидка 10% в день рождения',
    description: 'Акция не распространяется на сеты, комбо наборы, нагетсы, фри.',
    image: '/promoexample.png',
    id: uuid4()
  },
  {
    title: 'Скидка 10% в день рождения',
    description: 'Акция не распространяется на сеты, комбо наборы, нагетсы, фри.',
    image: '/promoexample.png',
    id: uuid4()
  },
  {
    title: 'Скидка 10% в день рождения',
    description: 'Акция не распространяется на сеты, комбо наборы, нагетсы, фри.',
    image: '/promoexample.png',
    id: uuid4()
  },
  {
    title: 'Скидка 10% в день рождения',
    description: 'Акция не распространяется на сеты, комбо наборы, нагетсы, фри.',
    image: '/promoexample.png',
    id: uuid4()
  },
  {
    title: 'Скидка 10% в день рождения',
    description: 'Акция не распространяется на сеты, комбо наборы, нагетсы, фри.',
    image: '/promoexample.png',
    id: uuid4()
  },
  {
    title: 'Скидка 10% в день рождения',
    description: 'Акция не распространяется на сеты, комбо наборы, нагетсы, фри.',
    image: '/promoexample.png',
    id: uuid4()
  },
]

export const promoSlice = createSlice({
  name: 'promo',
  initialState,
  reducers: {
    addItem: (state, action:PayloadAction<Card>) => {
      state.push(action.payload)
    },
    removeItem: (state, action:PayloadAction<string>) => {
      state = state.filter(item => item.id !== action.payload)
    },
  }
})

export const promoReducer = promoSlice.reducer
export const promoActions = promoSlice.actions