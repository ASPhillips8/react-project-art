import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Header from "../components/Header"
import Search from "../components/Search"

function Genre() {
  const [genres, setGenres] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/genres")
      .then((response) => response.json())
      .then((genreData) => setGenres(genreData))
  }, [])

  function handleGenreSearch(searchInput) {
    setSearch(searchInput)
  }

  const filteredGenreCollection = genres.filter((genre) =>
    genre.name.toLowerCase().includes(search.toLowerCase())
  )

  const genreList = filteredGenreCollection.map((genre) => {
    return (
      <li key={genre.id}>
        <h2>{genre.name}</h2>
        <p>Number of Pieces in the Collection: {genre.artworks.length}</p>
      </li>
    )
  })

  return (
    <main>
      <Header />
      <NavBar />
      <h1>Genres on Display</h1>
      <Search onSearch={handleGenreSearch} />
      <br></br>
      <ul>{genreList}</ul>
    </main>
  )
}

export default Genre
