import React from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import Header from "../components/Header"
import ArtCollection from "../components/ArtCollection"
import Sort from "../components/Sort"

function ArtExhibit() {
  return (
    <div>
      <Header />
      <NavBar />
      <h1>This is the Collection </h1>
      <ArtCollection />
    </div>
  )
}

export default ArtExhibit
