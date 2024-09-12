import React, { useState, useEffect } from "react"
import ArtForm from "./ArtForm"
import "./newArtWork.css"
import { fetchArtists, fetchGenres } from "../services/fetcher"
import {
  getOrCreateArtist,
  updateArtistsWithArtwork,
} from "../services/artistService"
import {
  getOrCreateGenre,
  updateGenreWithArtwork,
} from "../services/genreService"
import { createArtwork } from "../services/artworkService"
import { ArtPiece } from "../types"

interface NewArtWorkProps {
  onAddNewArt: (artwork: ArtPiece) => void
}

const NewArtWork: React.FC<NewArtWorkProps> = ({ onAddNewArt }) => {
  const [artists, setArtists] = useState([])
  const [genres, setGenres] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (data: ArtPiece) => {
    const artistEntry = await getOrCreateArtist(data.artist, artists)
    const genreEntry = await getOrCreateGenre(data.genre, genres)

    const newArt = {
      title: data.title,
      artist: data.artist,
      year: parseInt(data.year.toString()),
      medium: data.medium,
      genre: data.genre,
      description: data.description,
      image: data.image,
      artistId: artistEntry.id,
    }

    const createdArtData = await createArtwork(newArt)

    await updateArtistsWithArtwork(artistEntry, createdArtData.id)
    await updateGenreWithArtwork(genreEntry, createdArtData.id)

    onAddNewArt(createdArtData)
    closeModal()
  }

  useEffect(() => {
    Promise.all([fetchArtists(), fetchGenres()]).then(
      ([artistsData, genresData]) => {
        setArtists(artistsData)
        setGenres(genresData)
      }
    )
  }, [])

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Add New Art Piece</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>Add New Art Piece</h2>
            <ArtForm onFormSubmit={handleSubmit} />
          </div>
        </div>
      )}
    </div>
  )
}

export default NewArtWork
