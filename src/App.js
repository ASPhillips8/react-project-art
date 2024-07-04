import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"
import Header from "./components/Header"

function App() {
  const location = useLocation()
  const isLandingPage = location.pathname === "/"

  return (
    <div>
      <Header>{!isLandingPage && <NavBar />}</Header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
