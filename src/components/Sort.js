import React from "react"

const Sort = ({ sortCategory, onSortCategory, options }) => {
  const handleSortChange = (event) => {
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
