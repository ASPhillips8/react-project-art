import Home from "./pages/Home"
import ArtExhibit from "./pages/ArtExhibit"
import Artists from "./pages/Artists"
import Genre from "./pages/Genre"
import Artwork from "./pages/Artwork"

const routes = [
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
  {
    path: "/artwork/:id",
    element: <Artwork />,
  },
]

export default routes
