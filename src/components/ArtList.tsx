import React from "react"
import ArtCard from "./ArtCard"
import { ArtPiece } from "../types"

interface ArtListProps {
  artPieces: ArtPiece[]
}

const ArtList: React.FC<ArtListProps> = ({ artPieces }) => {
  const displayedArt = artPieces.map((artPiece) => {
    return <ArtCard key={artPiece.id} artPiece={artPiece}></ArtCard>
  })
  return <ul className="art-card-container">{displayedArt}</ul>
}

export default ArtList
