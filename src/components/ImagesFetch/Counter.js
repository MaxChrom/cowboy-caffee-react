import { useState } from "react"
import { useEffect } from "react"
const Counter = (props) => {
  const [data, setData] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)
  const loadData = async () => {
    const response = await fetch(
      "http://www.cbp-exercises.test/cowboy_cafe_react/cowboy-coffee-shop/src/api/images.php"
    )
    const data = await response.json()

    setData(data)
    setDataLoaded(true)
  }
  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      {dataLoaded ? (
        <>
          <img src={data[props.img]} alt='counter' />
        </>
      ) : (
        <p>We will have data here... later</p>
      )}
    </>
  )
}

export default Counter
