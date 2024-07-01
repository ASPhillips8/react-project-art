import React from "react"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  function handleEnterClick() {
    navigate("/art-exhibit")
  }

  return (
    <div>
      <h1>Welcome to the Collection</h1>
      <button onClick={handleEnterClick}>Submit for Entry</button>
    </div>
  )
}

export default Home
