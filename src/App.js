import React from "react"
import { Outlet, useLocation, Link } from "react-router-dom"
import NavBar from "./components/NavBar"
import Header from "./components/Header"

function App() {
  const location = useLocation()

  // Determine if the current location is the home page
  const isHomePage = location.pathname === "/"

  return (
    <div>
      <Header>{!isHomePage ? <NavBar /> : null}</Header>
      <main>
        <Outlet />
        {isHomePage && (
          <div>
            <p>Welcome to the Dr. Lumpy Art Collection!</p>
            <button>
              <Link to="/art-exhibit">Enter Art Exhibit</Link>
            </button>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
