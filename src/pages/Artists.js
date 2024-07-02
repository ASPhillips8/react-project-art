import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Header from "../components/Header"
import Search from "../components/Search"

function Artists() {
  const [artists, setArtists] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/artists")
      .then((response) => response.json())
      .then((artistData) => setArtists(artistData))
  }, [])

  const filteredCollection = artists.filter((artist) =>
    artist.name.toLowerCase().includes(search.toLowerCase())
  )

  const artistList = filteredCollection.map((artist) => {
    return (
      <li key={artist.id}>
        <h2>{artist.name}</h2>
        <p>Number of Pieces in the Collection: {artist.artworks.length}</p>
      </li>
    )
  })

  function handleArtistSearch(searchInput) {
    setSearch(searchInput)
  }

  return (
    <main>
      <Header />
      <NavBar />
      <h1>Artists on Display</h1>
      <Search onSearch={handleArtistSearch} />
      <br></br>
      <ul>{artistList}</ul>
    </main>
  )
}

export default Artists
