import React, { useEffect, useState } from "react"
import Search from "./Search"
import ArtList from "./ArtList"
import Sort from "./Sort"
import "./ArtCollection.css"

const sortOptions = [
  { value: "all", label: "All" },
  { value: "medium", label: "Medium" },
  { value: "title", label: "Title" },
]

function ArtCollection() {
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
    <main className="art-collection">
      <Sort
        sortCategory={sortCategory}
        onSortCategory={handleSortCategoryChange}
        options={sortOptions}
      />
      <Search />
      <ArtList artPieces={sortedAndFilteredListings} />
    </main>
  )
}

export default ArtCollection
