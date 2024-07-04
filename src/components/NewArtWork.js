import React, { useState, useEffect } from "react"
import ArtForm from "./ArtForm"
import "./newArtWork.css"
import {
  addNewArtwork,
  createGenre,
  fetchArtists,
  fetchGenres,
  updateArtists,
  updateGenre,
} from "../services/fetcher"
import {
  getOrCreateArtist,
  updateArtistsWithArtwork,
} from "../services/artistService"

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

  const handleFormInput = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const artistEntry = await getOrCreateArtist(formData.artist, artists)

    let genreEntry = genres.find((g) => g.name === formData.genre)
    if (!genreEntry) {
      genreEntry = {
        id: (genres.length + 1).toString(),
        name: formData.genre,
        artworks: [],
      }
      await createGenre(genreEntry)
    }

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

    const createdArtData = await addNewArtwork(newArt)

    await updateArtistsWithArtwork(artistEntry, createdArtData.id)

    // artistEntry.artworks.push(createdArtData.id)
    // await updateArtists(artistEntry.id, artistEntry)

    genreEntry.artworks.push(createdArtData.id)
    await updateGenre(genreEntry.id, genreEntry)

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

  if (!isOpen) return null

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
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
  )
}

export default NewArtWork
