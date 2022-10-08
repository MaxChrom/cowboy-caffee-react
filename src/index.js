// import React from "react"
// import ReactDOM from "react-dom/client"
import "./index.css"
// import App from "./App"
import reportWebVitals from "./reportWebVitals"

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App />)

import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import Coffee from "./Pages/Coffee"
import Menu from "./Pages/Menu"
import Story from "./Pages/Story"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Home' element={<Home />} />
          <Route path='Coffee' element={<Coffee />} />
          <Route path='Menu' element={<Menu />} />
          <Route path='Story' element={<Story />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
