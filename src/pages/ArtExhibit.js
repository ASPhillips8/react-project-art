import React, { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import Sort from "../components/Sort"
import Search from "../components/Search"
import ArtList from "../components/ArtList"
import NewArtWork from "../components/NewArtWork"
import { fetchArtworks } from "../services/fetcher"

const sortOptions = [
  { value: "all", label: "All" },
  { value: "medium", label: "Medium" },
  { value: "title", label: "Title" },
]

function ArtExhibit() {
  const [artPieces, setArtPieces] = useState([])
  const [search, setSearch] = useState("")
  const [sortCategory, setSortCategory] = useState("all")
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetchArtworks()
      .then((artData) => setArtPieces(artData))
      .catch((error) => console.error("Error fetching artworks:", error))
  }, [])

  function handleTitleSearch(searchInput) {
    setSearch(searchInput)
  }

  function handleSortCategoryChange(category) {
    setSortCategory(category)
  }

  function handleNewArtwork(newArtwork) {
    setArtPieces([...artPieces, newArtwork])
  }

  const filteredCollection = artPieces.filter((artPiece) =>
    artPiece.title.toLowerCase().includes(search.toLowerCase())
  )

  const sortedAndFilteredListings =
    sortCategory !== "all"
      ? [...filteredCollection].sort((a, b) => {
          const categoryA = a[sortCategory] ? a[sortCategory].toLowerCase() : ""
          const categoryB = b[sortCategory] ? b[sortCategory].toLowerCase() : ""
          return categoryA.localeCompare(categoryB)
        })
      : [...filteredCollection]

  return (
    <main>
      <NavBar />
      <h1>The Current Exhibit</h1>
      <Search onSearch={handleTitleSearch} />
      <br></br>
      <Sort
        sortCategory={sortCategory}
        onSortCategory={handleSortCategoryChange}
        options={sortOptions}
      />
      <hr />
      <button onClick={() => setIsModalOpen(true)}>Add New Art Piece</button>
      <ArtList artPieces={sortedAndFilteredListings} />
      <NewArtWork
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
        onAddNewArt={handleNewArtwork}
      />
    </main>
  )
}

export default ArtExhibit
