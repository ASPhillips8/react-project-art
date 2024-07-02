import React, { useState } from "react"

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

  const handleFormInput = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
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
