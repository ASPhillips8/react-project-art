import React from "react"
import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/art-exhibit" className="navbar">
        Home
      </NavLink>
      <NavLink to="/artists" className="navbar">
        Artists
      </NavLink>
      <NavLink to="/genres" className="navbar">
        Genres
      </NavLink>
      <NavLink to="/" className="navbar exit-exhibit">
        Exit Exhibit
      </NavLink>
    </nav>
  )
}

export default NavBar
