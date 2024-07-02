import React from "react"
import { Link } from "react-router-dom"
import "./ArtCard.css"

function ArtCard({ artPiece }) {
  const { id, title, image, medium } = artPiece
  return (
    <li className="art-card">
      <Link to={`/artwork/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <h4>{title}</h4>
      <p>Medium: {medium}</p>
    </li>
  )
}

export default ArtCard
