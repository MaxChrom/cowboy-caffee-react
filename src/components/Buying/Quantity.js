import React, { useReducer } from "react"
import reducer from "../../reducer"
import { useState, useContext } from "react"
import { UserContext } from "../../UserContext"

const Quantity = (props, { parentCallback }) => {
  const [amount, setAmount] = useState(1)
  const [price, setPrice] = useState(Number(props.price))
  const { value, setValue } = useContext(UserContext)
  //###REDUCER
  // const [state, dispatch] = useReducer(reducer, {
  //   price: Number(props.price),
  //   value: 1,
  //   totalPrice: Number(props.price),
  // })

  console.log(props.price)
  const increment = () => {
    setAmount(Math.min(20, amount + 1))
    setPrice(Math.min(Number(props.price) * 20, Number(props.price) + price))
    props.parentCallback(price)

    //###REDUCER    dispatch({ type: "increment" })
    console.log(price)
  }

  const decrement = () => {
    setAmount(Math.max(0, amount - 1))
    setPrice(Math.max(0, price - Number(props.price)))
    console.log(price)
    //###REDUCER    dispatch({ type: "decrement" })
  }

  return (
    <div className='container'>
      <div className='quantity-container'>
        <div className='quantity-input'>
          <button
            className='quantity-input__modifier quantity-input__modifier--left'
            onClick={decrement}
          >
            &mdash;
          </button>
          <input
            className='quantity-input__screen'
            type='text'
            //###REDUCER     value={state.value}
            value={amount}
            readOnly
          />
          <button
            className='quantity-input__modifier quantity-input__modifier--right'
            // onClick={increment}
            onClick={() => {
              increment()
            }}
          >
            &#xff0b;
          </button>
        </div>
      </div>
      <p>Total price: {price}$</p>
      {/*  //###REDUCER    <p>Total price: {state.totalPrice}$</p> */}
    </div>
  )
}

export default Quantity
