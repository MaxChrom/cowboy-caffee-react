import { useState, useEffect } from "react"
import { useContext } from "react"
import { UserContext } from "../../UserContext"
import Quantity from "./Quantity"
import { useReducer, reducer } from "react"

const Buy = (props) => {
  const [buttonText, setButtonText] = useState("Add to cart")
  const [isActive, setIsActive] = useState(false)
  const { value, setValue } = useContext(UserContext)
  const [totalPrice, setTotalPrice] = useState(Number(props.price))

  const callback = (totalPrice) => {
    setTotalPrice(totalPrice)
    console.log(totalPrice)
  }
  const addToCart = () => {
    setValue([
      ...value,
      [
        `${props.name}`,
        `${props.img}`,
        `${props.discription}`,
        `${props.price}`,
        `${totalPrice}`,
      ],
    ])
    console.log(value)
    setIsActive((current) => !current)

    setButtonText("Remove from cart")
    if (isActive) {
      setValue([])
      setButtonText("Add to cart")
    }
  }

  /// INSTEAD OF BOOL SHOULD BE A STRING!!!
  // useEffect(() => {
  //   const raw = localStorage.getItem("isActive", JSON.parse(isActive)) || []
  //   setIsActive(raw)
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem("isActive", JSON.stringify(isActive))
  // }, [isActive])

  // useEffect(() => {
  //   if (isActive == false) {
  //     setButtonText("Add to cart")
  //   } else {
  //     setButtonText("Remove from cart")
  //     setValue([])
  //   }
  // }, [isActive])

  return (
    <div>
      <Quantity price={props.price} parentCallback={callback} />
      <button
        class='buy'
        style={{
          fontSize: isActive ? "0.8rem" : "1rem",
          color: isActive ? "lightgray" : "white",
        }}
        // onClick={addToCart}
        onClick={() => {
          addToCart()
        }}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default Buy
