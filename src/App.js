import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"

function App() {
  const location = useLocation()

  // Check if the current location is not the home page
  const showNavBar = location.pathname !== "/"

  return (
    <div>
      <header style={{ display: showNavBar ? "block" : "none" }}>
        <h1>Dr. Lumpy Art Collection</h1>
        {showNavBar && <NavBar />}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
