import React from "react"

function Search({ onSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Collection:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a title to search..."
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  )
}

export default Search
