import React from "react"

const ArtForm: React.FC = ({ formData, onFormInput, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={onFormInput}
        required
      />
      <input
        type="text"
        name="artist"
        placeholder="Artist"
        value={formData.artist}
        onChange={onFormInput}
        required
      />
      <input
        type="number"
        name="year"
        placeholder="Year"
        value={formData.year}
        onChange={onFormInput}
        required
      />
      <input
        type="text"
        name="medium"
        placeholder="Medium"
        value={formData.medium}
        onChange={onFormInput}
        required
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.genre}
        onChange={onFormInput}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={onFormInput}
        required
      />
      <input
        type="url"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={onFormInput}
        required
      />
      <button type="submit">Add Art Piece</button>
    </form>
  )
}

export default ArtForm
