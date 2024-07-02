import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Header from "../components/Header"
import Search from "../components/Search"

function Artists() {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/artists")
      .then((response) => response.json())
      .then((artistData) => setArtists(artistData))
  }, [])

  const artistList = artists.map((artist) => {
    return (
      <article key={artist.id}>
        <h2>{artist.name}</h2>
        <p>Number of Pieces in the Collection: {artist.artworks.length}</p>
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
      <h1>Artists on Display</h1>
      <Search onSearch={handleSearch} />
      <br></br>
      {artistList}
    </main>
  )
}

export default Artists
