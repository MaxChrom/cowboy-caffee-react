import { useState } from "react"
import { useEffect } from "react"

const HeaderLogo = () => {
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
    loadData() // do something when rendering first time!
  }, [])

  return (
    <nav className='header_logo'>
      {dataLoaded ? (
        <>
          <img src={data.url} alt='logo' />
        </>
      ) : (
        <p>We will have data here... later</p>
      )}
    </nav>
  )
}

export default HeaderLogo
