import React from "react"

interface SearchProps {
  onSearch: (query: string) => void
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  return (
    <div className="search_bar">
      <label htmlFor="search">Search Collection:</label>
      <input
        type="text"
        id="search"
        placeholder="Type to search..."
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  )
}

export default Search
