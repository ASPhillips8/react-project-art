import React from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import NavBar from "./components/NavBar"
import Header from "./components/Header"

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const isLandingPage = location.pathname === "/"

  function handleEnterClick() {
    navigate("/art-exhibit")
  }

  return (
    <div>
      <Header>{!isLandingPage && <NavBar />}</Header>
      <main>
        {isLandingPage ? (
          <div className="main-container">
            <h1>Welcome to the Dr. Lumpy Art Collection!</h1>
            <h3> PHD ...?</h3>
            <button onClick={handleEnterClick}>Enter Art Exhibit</button>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  )
}

export default App
