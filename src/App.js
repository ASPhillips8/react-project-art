import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div>
      <header>
        <h1>Dr. Lumpy Art Collection</h1>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
