import React from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import Header from "../components/Header"

function Artists() {
  return (
    <div>
      <Header />
      <NavBar />
      <h1>Artist Page </h1>
      <ul>List of Genre</ul>
    </div>
  )
}

export default Artists
