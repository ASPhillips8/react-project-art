import React from "react"
import "./ArtCard.css"

function ArtCard({ artPiece }) {
  const { id, title, year, image, medium } = artPiece
  return (
    <li className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>Medium: {medium}</p>
    </li>
  )
}

export default ArtCard
