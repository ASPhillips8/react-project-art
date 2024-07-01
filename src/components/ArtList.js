import React from "react"
import ArtCard from "./ArtCard"

function ArtList({ artPieces }) {
  const displayedArt = artPieces.map((artPiece) => {
    return <ArtCard key={artPiece.id} artPiece={artPiece}></ArtCard>
  })
  return <ul className="cards">{displayedArt}</ul>
}

export default ArtList
