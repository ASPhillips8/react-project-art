import React, { useEffect, useState } from "react"
import Search from "./Search"
import ArtList from "./ArtList"
import "./ArtCollection.css"

function ArtCollection() {
  const [artPieces, setArtPieces] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/artworks")
      .then((response) => response.json())
      .then((artData) => setArtPieces(artData))
  }, [])

  return (
    <main className="art-collection">
      <Search />
      <ArtList artPieces={artPieces} />
    </main>
  )
}

export default ArtCollection
