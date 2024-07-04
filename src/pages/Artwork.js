import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import NavBar from "../components/NavBar"
import { fetchArtwork } from "../services/fetcher"

function Artwork() {
  const [artwork, setArtwork] = useState({})
  const params = useParams()
  const artworkId = params.id

  useEffect(() => {
    fetchArtwork(artworkId)
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
