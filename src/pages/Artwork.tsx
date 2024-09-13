import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import NavBar from "../components/NavBar"
import { fetchArtwork } from "../services/fetcher"
import { ArtPiece } from "../types"

const Artwork: React.FC = () => {
  const [artwork, setArtwork] = useState<ArtPiece | null>(null)
  const params = useParams<{ id: string }>()
  const artworkId = params.id

  useEffect(() => {
    if (artworkId) {
      fetchArtwork(artworkId)
        .then((artData) => setArtwork(artData))
        .catch((error) => console.error(error))
    }
  }, [artworkId])

  if (!artwork) {
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
          <br />
          <Link to="/art-exhibit">
            <button>Back to the Exhibit</button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Artwork
