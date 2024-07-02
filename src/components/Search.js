import React, { useState } from "react"

function Search({ onSearch }) {
  const [searchInput, setSearchInput] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    onSearch(searchInput)
  }

  return (
    <label>
      Search the Pieces
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="search by title"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
    </label>
  )
}

export default Search
