import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Search from "../components/Search"
import { fetchGenres } from "../services/fetcher"

function Genre() {
  const [genres, setGenres] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetchGenres()
      .then((genreData) => setGenres(genreData))
      .catch((error) => console.error("Error setting genres:", error))
  }, [])

  const handleGenreSearch = (searchInput) => {
    setSearch(searchInput)
  }

  const filteredGenreCollection = genres.filter((genre) =>
    genre.name.toLowerCase().includes(search.toLowerCase())
  )

  const GenreList = () => (
    <ul>
      {filteredGenreCollection.map((genre) => (
        <li key={genre.id}>
          <h2>{genre.name}</h2>
          <p>Number of Pieces in the Collection: {genre.artworks.length}</p>
        </li>
      ))}
    </ul>
  )

  return (
    <main>
      <NavBar />
      <h1 className="pages-heading">Genres on Display</h1>
      <Search onSearch={handleGenreSearch} />
      <br />
      {genres.length > 0 ? <GenreList /> : <p>No genres found.</p>}
    </main>
  )
}

export default Genre
