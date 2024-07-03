import React, { useState, useEffect } from "react"
import ArtForm from "./ArtForm"
import {
  addNewArtwork,
  createArtist,
  createGenre,
  updateArtists,
  updateGenre,
} from "../services/fetcher"

function NewArtWork({ isOpen, onClose, onAddNewArt }) {
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
