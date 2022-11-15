import React, { useReducer } from "react"

export default function reducer(state, action) {
  const ACTIONS = {}
  console.log(state.value, state.price)
  switch (action.type) {
    case "increment":
      console.log(state.value)
      return {
        price: state.price,
        value: Math.min(20, state.value + 1),
        totalPrice: state.value * state.price,
      }
    case "decrement":
      return {
        price: state.price,
        value: Math.max(0, state.value - 1),
        totalPrice: Math.max(0, state.totalPrice - state.price),
      }
    default:
      return {
        price: state.price,
        value: state.value,
        totalPrice: state.totalPrice,
      }
  }
}
