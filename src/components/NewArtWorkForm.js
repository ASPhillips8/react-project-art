import React, { useState, useEffect } from "react"
import {
  addNewArtwork,
  createArtist,
  createGenre,
  updateArtists,
  updateGenre,
} from "../services/fetcher"

function NewArtWorkForm({ isOpen, onClose, onAddNewArt }) {
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
    Promise.all([
      fetch("http://localhost:3001/artists").then((response) =>
        response.json()
      ),
      fetch("http://localhost:3001/genres").then((response) => response.json()),
    ]).then(([artistsData, genresData]) => {
      setArtists(artistsData)
      setGenres(genresData)
    })
  }, [])

  const handleFormInput = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    let artistEntry = artists.find((a) => a.name === formData.artist)
    if (!artistEntry) {
      artistEntry = {
        id: (artists.length + 1).toString(),
        name: formData.artist,
        artworks: [],
      }
      await createArtist(artistEntry)
    }

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

    artistEntry.artworks.push(createdArtData.id)
    await updateArtists(artistEntry.id, artistEntry)

    genreEntry.artworks.push(createdArtData.id)
    await updateGenre(genreEntry.id, genreEntry)

    onAddNewArt(createdArtData)

    setFormData({
      title: "",
      artist: "",
      year: "",
      medium: "",
      genre: "",
      description: "",
      image: "",
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
