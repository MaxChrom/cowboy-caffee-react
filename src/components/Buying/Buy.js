import { useState, useEffect } from "react"
import { useContext } from "react"
import { UserContext } from "../../UserContext"

const Buy = (props) => {
  const [buttonText, setButtonText] = useState("Add to cart")
  const [isActive, setIsActive] = useState(false)
  const { value, setValue } = useContext(UserContext)
  const addToCart = () => {
    setValue([[`${props.name}`], [`${props.img}`], [`${props.discription}`]])
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
      <button
        class='buy'
        style={{
          fontSize: isActive ? "0.8rem" : "1rem",
          color: isActive ? "lightgray" : "white",
        }}
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
