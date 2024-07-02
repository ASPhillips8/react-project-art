import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import Header from "../components/Header"
import Sort from "../components/Sort"
import Search from "../components/Search"
import ArtList from "../components/ArtList"

const sortOptions = [
  { value: "all", label: "All" },
  { value: "medium", label: "Medium" },
  { value: "title", label: "Title" },
]

function ArtExhibit() {
  const [artPieces, setArtPieces] = useState([])
  const [sortCategory, setSortCategory] = useState("all")

  useEffect(() => {
    fetch("http://localhost:3001/artworks")
      .then((response) => response.json())
      .then((artData) => setArtPieces(artData))
  }, [])

  const handleSortCategoryChange = (category) => {
    setSortCategory(category)
  }

  const sortedAndFilteredListings =
    sortCategory !== "all"
      ? [...artPieces].sort((a, b) => {
          const categoryA = a[sortCategory] ? a[sortCategory].toLowerCase() : ""
          const categoryB = b[sortCategory] ? b[sortCategory].toLowerCase() : ""
          return categoryA.localeCompare(categoryB)
        })
      : [...artPieces]

  return (
    <div>
      <Header />
      <NavBar />
      <h1>This is the Collection</h1>
      <Sort
        sortCategory={sortCategory}
        onSortCategory={handleSortCategoryChange}
        options={sortOptions}
      />
      <Search />
      <ArtList artPieces={sortedAndFilteredListings} />
    </div>
  )
}

export default ArtExhibit
