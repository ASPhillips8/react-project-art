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

const initialFormData = {
  title: "",
  artist: "",
  year: "",
  medium: "",
  genre: "",
  description: "",
  image: "",
}

function NewArtWork({ isOpen, onClose, onAddNewArt }) {
  const [formData, setFormData] = useState(initialFormData)
  const [artists, setArtists] = useState([])
  const [genres, setGenres] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleFormInput = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const artistEntry = await getOrCreateArtist(formData.artist, artists)
    const genreEntry = await getOrCreateGenre(formData.genre, genres)

    const newArt = {
      title: formData.title,
      artist: formData.artist,
      year: parseInt(formData.year),
      medium: formData.medium,
      genre: formData.genre,
      description: formData.description,
      image: formData.image,
      artistId: artistEntry.id,
    }

    const createdArtData = await createArtwork(newArt)

    await updateArtistsWithArtwork(artistEntry, createdArtData.id)
    await updateGenreWithArtwork(genreEntry, createdArtData.id)

    onAddNewArt(createdArtData)
    setFormData(initialFormData)
    onClose()
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
            <ArtForm
              formData={formData}
              onFormInput={handleFormInput}
              onFormSubmit={handleSubmit}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default NewArtWork
