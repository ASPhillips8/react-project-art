import React from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  const handleEnterClick = () => {
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
