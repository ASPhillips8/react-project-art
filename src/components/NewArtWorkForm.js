import React, { useState, useEffect } from "react"
import {
  addNewArtwork,
  createArtist,
  createGenre,
  updateArtists,
  updateGenre,
} from "../services/fetcher"

function NewArtWorkForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    year: "",
    medium: "",
    genre: "",
    description: "",
    image: "",
  })

  const [artists, setArtists] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    // Fetch artists
    fetch("http://localhost:3001/artists")
      .then((response) => response.json())
      .then((data) => setArtists(data))

    // Fetch genres
    fetch("http://localhost:3001/genres")
      .then((response) => response.json())
      .then((data) => setGenres(data))
  }, [])

  const handleFormInput = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let artistId
    let artistEntry = artists.find((a) => a.name === formData.artist)

    if (artistEntry) {
      artistId = artistEntry.id
    } else {
      artistId = artists.length + 1
      artistEntry = {
        id: artistId,
        name: formData.artist,
        artworks: [],
      }
    }
    createArtist(artistEntry)

    let genreEntry = genres.find((g) => g.name === formData.genre)
    if (!genreEntry) {
      const genreId = genres.length + 1
      genreEntry = {
        id: genreId,
        name: formData.genre,
        artworks: [],
      }
      createGenre(genreEntry)
    }
    const newArt = {
      title: formData.title,
      artist: formData.artist,
      year: parseInt(formData.year),
      medium: formData.medium,
      genre: formData.genre,
      description: formData.description,
      image: formData.image,
      artistId,
    }
    addNewArtwork(newArt).then((createdArtData) => {
      artistEntry.artworks.push(createdArtData.id)
      updateArtists(artistId, artistEntry)
      genreEntry.artworks.push(createdArtData.id)
      updateGenre(genreEntry.id, genreEntry)
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Add New Art Piece</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleFormInput}
            required
          />
          <input
            type="text"
            name="artist"
            placeholder="Artist"
            value={formData.artist}
            onChange={handleFormInput}
            required
          />
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={formData.year}
            onChange={handleFormInput}
            required
          />
          <input
            type="text"
            name="medium"
            placeholder="Medium"
            value={formData.medium}
            onChange={handleFormInput}
            required
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={formData.genre}
            onChange={handleFormInput}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleFormInput}
            required
          />
          <input
            type="url"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleFormInput}
            required
          />
          <button type="submit">Add Art Piece</button>
        </form>
      </div>
    </div>
  )
}

export default NewArtWorkForm
