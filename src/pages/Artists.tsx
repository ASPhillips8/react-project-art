import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Search from "../components/Search"
import { fetchArtists } from "../services/fetcher"
import { Artist } from "../types"

interface ArtistProps extends Artist {}

const Artists: React.FC = () => {
  const [artists, setArtists] = useState<ArtistProps[]>([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetchArtists()
      .then((artistData) => setArtists(artistData))
      .catch((error) => console.error("Error setting artists:", error))
  }, [])

  const handleArtistSearch = (searchInput: string) => {
    setSearch(searchInput)
  }

  const filteredArtistCollection = artists.filter((artist) =>
    artist.name.toLowerCase().includes(search.toLowerCase())
  )

  const ArtistList = () => (
    <ul>
      {filteredArtistCollection.map((artist) => (
        <li key={artist.id}>
          <h2>{artist.name}</h2>
          <p>Number of Pieces in the Collection: {artist.artworks.length}</p>
        </li>
      ))}
    </ul>
  )

  return (
    <main>
      <NavBar />
      <h1 className="pages-heading">Artists on Display</h1>
      <Search onSearch={handleArtistSearch} />
      <br />
      {artists.length > 0 ? <ArtistList /> : <p>No artists found.</p>}
    </main>
  )
}

export default Artists
