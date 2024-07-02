import React from "react"

const Sort = ({ sortCategory, onSortCategory }) => {
  const handleSortChange = (event) => {
    onSortCategory(event.target.value)
  }

  return (
    <div className="sort-container">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortCategory} onChange={handleSortChange}>
        <option value="all">All</option>
        <option value="medium">Medium</option>
        <option value="title">Title</option>
      </select>
    </div>
  )
}

export default Sort
