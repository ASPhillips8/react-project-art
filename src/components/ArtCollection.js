import React, { useEffect, useState } from "react"
import Search from "./Search"
import ArtList from "./ArtList"
import Sort from "./Sort"
import "./ArtCollection.css"

const sortStrategies = {
  Alphabetically: (a, b) => a.title.localeCompare(b.title),
  MediaStreamAudioSourceNode: (a, b) => a.artist.localeCompare(b.artist),
  YearAscending: (a, b) => a.year - b.year,
}

function ArtCollection() {
  const [artPieces, setArtPieces] = useState([])
  const [sortCategory, setSortCategory] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/artworks")
      .then((response) => response.json())
      .then((artData) => setArtPieces(artData))
  }, [])

  const sortedAndFilteredListings = sortCategory
    ? artPieces.sort((a, b) => {
        return a[sortCategory]
          .toLowerCase()
          .localeCompare(b[sortCategory].toLowerCase())
      })
    : artPieces

  return (
    <main className="art-collection">
      <Sort onSortCategory={setSortCategory} sortCategory={sortCategory} />
      <Search />
      <ArtList artPieces={artPieces} />
    </main>
  )
}

export default ArtCollection
