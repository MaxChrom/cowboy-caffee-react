import "./index.css"
import React from "react"
import reportWebVitals from "./reportWebVitals"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import Coffee from "./Pages/Coffee"
import Menu from "./Pages/Menu"
import Story from "./Pages/Story"
import Cart from "./Pages/Cart"
import { UserContext } from "./UserContext"
import { useState } from "react"

export default function App() {
  const [value, setValue] = useState([])
  console.log(value)
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ value, setValue }}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='Home' element={<Home />} />
            <Route path='Menu' element={<Menu />} />
            <Route path='Story' element={<Story />} />
            <Route path='Coffee' element={<Coffee />} />
            <Route path='Cart' element={<Cart />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

// ReactDOM.render(<App />, document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
