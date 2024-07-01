import React from "react"
import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="nav">
      <NavLink exact to="/" className="navbar" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/artists" className="navbar" activeClassName="active">
        Artists
      </NavLink>
      <NavLink to="/genres" className="navbar" activeClassName="active">
        Genres
      </NavLink>
    </nav>
  )
}

export default NavBar
