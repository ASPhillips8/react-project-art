import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Search from "../components/Search"
import { fetchArtists } from "../services/fetcher"

function Artists() {
  const [artists, setArtists] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetchArtists()
      .then((artistData) => setArtists(artistData))
      .catch((error) => console.error("Error setting artists:", error))
  }, [])

  const filteredArtistCollection = artists.filter((artist) =>
    artist.name.toLowerCase().includes(search.toLowerCase())
  )

  const artistList = filteredArtistCollection.map((artist) => {
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
      <NavBar />
      <h1>Artists on Display</h1>
      <Search onSearch={handleArtistSearch} />
      <br></br>
      <ul>{artistList}</ul>
    </main>
  )
}

export default Artists
