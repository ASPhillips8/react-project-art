import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Header from "../components/Header"
import Search from "../components/Search"

function Genre() {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/genres")
      .then((response) => response.json())
      .then((genreData) => setGenres(genreData))
  }, [])

  const genreList = genres.map((genre) => {
    return (
      <article key={genre.id}>
        <h2>{genre.name}</h2>
        <p>Number of Pieces in the Collection: {genre.artworks.length}</p>
      </article>
    )
  })

  function handleSearch(event) {
    console.log(event.target.value)
  }

  return (
    <main>
      <Header />
      <NavBar />
      <h1>Genres on Display</h1>
      <Search onSearch={handleSearch} />
      <br></br>
      {genreList}
    </main>
  )
}

export default Genre
