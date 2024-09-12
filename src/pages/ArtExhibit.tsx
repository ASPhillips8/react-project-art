import React, { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import Sort from "../components/Sort"
import Search from "../components/Search"
import ArtList from "../components/ArtList"
import NewArtWork from "../components/NewArtWork"
import { fetchArtworks } from "../services/fetcher"
import { ArtPiece } from "../types"

type SortCategory = keyof ArtPiece | "all"

const sortOptions: { value: SortCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "medium", label: "Medium" },
  { value: "title", label: "Title" },
]

const ArtExhibit: React.FC = () => {
  const [artPieces, setArtPieces] = useState<ArtPiece[]>([])
  const [search, setSearch] = useState("")
  const [sortCategory, setSortCategory] = useState<SortCategory>("all")

  function handleTitleSearch(searchInput: string) {
    setSearch(searchInput)
  }

  function handleSortCategoryChange(category: SortCategory) {
    setSortCategory(category)
  }

  function handleNewArtwork(newArtwork: ArtPiece) {
    setArtPieces((prevArtPieces) => [...artPieces, newArtwork])
  }

  const filteredCollection = artPieces.filter((artPiece) =>
    artPiece.title.toLowerCase().includes(search.toLowerCase())
  )

  const sortedAndFilteredListings =
    sortCategory !== "all"
      ? [...filteredCollection].sort((a, b) => {
          const categoryA = a[sortCategory]
          const categoryB = b[sortCategory]

          const valueA =
            typeof categoryA === "string" ? categoryA.toLowerCase() : ""
          const valueB =
            typeof categoryB === "string" ? categoryB.toLowerCase() : ""

          return valueA.localeCompare(valueB)
        })
      : [...filteredCollection]

  useEffect(() => {
    fetchArtworks()
      .then((artData) => setArtPieces(artData))
      .catch((error) => console.error("Error fetching artworks:", error))
  }, [])

  return (
    <main>
      <NavBar />
      <h1 className="pages-heading">The Current Exhibit</h1>
      <Search onSearch={handleTitleSearch} />
      <br></br>
      <Sort
        sortCategory={sortCategory}
        onSortCategory={handleSortCategoryChange}
        options={sortOptions}
      />
      <hr />
      <NewArtWork onAddNewArt={handleNewArtwork} />
      <ArtList artPieces={sortedAndFilteredListings} />
    </main>
  )
}

export default ArtExhibit
