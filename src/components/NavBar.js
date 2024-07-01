import React from "react"
import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="navbar">
        Home
      </NavLink>
      <NavLink to="/artist" className="navbar">
        Artists
      </NavLink>
      <NavLink to="/genres" className="navbar">
        Genres
      </NavLink>
    </nav>
  )
}

export default NavBar
