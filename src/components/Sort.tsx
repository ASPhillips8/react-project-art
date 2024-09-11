import React from "react"
import { ArtPiece } from "../types"

type SortCategory = keyof ArtPiece | "all"

interface Option {
  value: SortCategory
  label: string
}

interface SortProps {
  sortCategory: SortCategory
  onSortCategory: (category: SortCategory) => void
  options: Option[]
}

const Sort: React.FC<SortProps> = ({
  sortCategory,
  onSortCategory,
  options,
}) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortCategory(event.target.value as SortCategory)
  }

  return (
    <div className="sort-container">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortCategory} onChange={handleSortChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Sort
