import Home from "./pages/Home"
import ArtExhibit from "./pages/ArtExhibit"
import Artists from "./pages/Artists"
import Genre from "./pages/Genre"
import Artwork from "./pages/Artwork"
import ErrorPage from "./pages/ErrorPage"

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/artworks",
    element: <ArtExhibit />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/artists",
    element: <Artists />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/genres",
    element: <Genre />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/artwork/:id",
    element: <Artwork />,
    errorElement: <ErrorPage />,
  },
]

export default routes
