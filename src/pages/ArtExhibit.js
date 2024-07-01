import React from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import Header from "../components/Header"

function ArtExhibit() {
  return (
    <div>
      <Header />
      <NavBar />
      <h1>This is the Collection </h1>
      <p>the collection</p>
    </div>
  )
}

export default ArtExhibit
