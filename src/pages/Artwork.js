import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import Header from "../components/Header"

function Artwork() {
  const [artwork, setArtwork] = useState({})
  const params = useParams()
  const artworkId = params.id

  useEffect(() => {
    fetch(`http://localhost:3001/artworks/${artworkId}`)
      .then((response) => response.json())
      .then((artData) => setArtwork(artData))
      .catch((error) => console.error(error))
  }, [artworkId])

  if (!artwork.title) {
    return <h1>Loading....</h1>
  }

  return (
    <div className="artwork-page">
      <NavBar />
      <main className="artwork-details">
        <article className="text-elements">
          <h1>"{artwork.title}"</h1>
          <h2>{artwork.year}</h2>
          <p>{artwork.description}</p>
          <span>{artwork.genre}</span>
        </article>
        <h2>{artwork.artist}</h2>
        <div className="image-container">
          <img src={artwork.image} alt={artwork.title} />
        </div>
      </main>
    </div>
  )
}

export default Artwork
