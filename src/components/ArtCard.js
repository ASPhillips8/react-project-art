import React from "react"
import "./ArtCard.css"

function ArtCard() {
  return (
    <li className="card">
      <img src={"https://via.placeholder.com/400"} alt={"Title"} />
      <h4>{"Title"}</h4>
      <p>Artist: {"artist"}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  )
}

export default ArtCard
