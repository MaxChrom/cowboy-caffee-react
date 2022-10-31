import React, { useState } from "react"
import { ReactDOM } from "react"

const Quantity = () => {
  const [value, setValue] = useState(1)
  const [price, setPrice] = useState(30)
  const increment = () => {
    setValue(value + 1)
    setPrice(price + 30)
    if (value >= 20) {
      setValue(value)
    }
  }

  const decrement = () => {
    setValue(value - 1)
    setPrice(price - 30)
    if (value <= 0) {
      setValue(0)
      setPrice(0)
    }
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
            value={value}
            readonly
          />
          <button
            className='quantity-input__modifier quantity-input__modifier--right'
            onClick={increment}
          >
            &#xff0b;
          </button>
        </div>
      </div>
      <p>Total price: {price}$</p>
    </div>
  )
}

export default Quantity
