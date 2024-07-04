import React from "react"
import { useNavigate } from "react-router-dom"

function HomePage() {
  const navigate = useNavigate()

  const handleEnterClick = () => navigate("/art-exhibit")

  return (
    <div className="main-container">
      <h1>Welcome to the Dr. Lumpy Art Collection!</h1>
      <h3> PHD ...?</h3>
      <p>
        The "Dr. Lumpy Art Collection" app is a virtual gallery showcasing a
        curated selection of artworks where I do not hold ownership rights. It
        serves as a digital exploration into the world of art, offering a
        platform to appreciate and discover various pieces without possessing
        them physically. I hope you have fun exploring and hope to expand more
        in the future
      </p>
      <button onClick={handleEnterClick}>Enter Art Exhibit</button>
    </div>
  )
}

export default HomePage
