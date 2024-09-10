import React from "react"

interface Option {
  value: string
  label: string
}

interface SortProps {
  sortCategory: string
  onSortCategory: (category: string) => void
  options: Option[]
}

const Sort: React.FC<SortProps> = ({
  sortCategory,
  onSortCategory,
  options,
}) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortCategory(event.target.value)
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
