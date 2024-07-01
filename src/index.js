import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home"
import ArtExhibit from "./pages/ArtExhibit"
import Artists from "./pages/Artists"
import Genre from "./pages/Genre"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/artworks",
    element: <ArtExhibit />,
  },
  {
    path: "/artists",
    element: <Artists />,
  },
  {
    path: "/genres",
    element: <Genre />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
