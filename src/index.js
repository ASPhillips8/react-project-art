// import React from "react"
// import ReactDOM from "react-dom/client"
// import "./index.css"
// import App from "./App"
// import Home from "./pages/Home"
// import { createBrowserRouter, RouterProvider } from "react-router-dom"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/home",
//     element: <Home />,
//   },
// ])

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
// src/index.js

import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home"
import ArtExhibit from "./pages/ArtExhibit"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/art-exhibit",
    element: <ArtExhibit />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
