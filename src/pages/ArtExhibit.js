import React, { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import Header from "../components/Header"
import Sort from "../components/Sort"
import Search from "../components/Search"
import ArtList from "../components/ArtList"
import NewArtWorkForm from "../components/NewArtWorkForm"

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
    fetch("http://localhost:3001/artworks")
      .then((response) => response.json())
      .then((artData) => setArtPieces(artData))
  }, [])

  console.log("artEx", artPieces)
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
      <Header />
      <NavBar />
      <h1>Current Collection</h1>
      <Search onSearch={handleTitleSearch} />
      <br></br>
      <Sort
        sortCategory={sortCategory}
        onSortCategory={handleSortCategoryChange}
        options={sortOptions}
      />
      <button onClick={() => setIsModalOpen(true)}>Add New Art Piece</button>
      <ArtList artPieces={sortedAndFilteredListings} />
      <NewArtWorkForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
        onAddNewArt={handleNewArtwork}
      />
    </main>
  )
}

export default ArtExhibit
