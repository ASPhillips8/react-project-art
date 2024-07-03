import App from "./App"
import ArtExhibit from "./pages/ArtExhibit"
import Artists from "./pages/Artists"
import Genre from "./pages/Genre"
import Artwork from "./pages/Artwork"
import ErrorPage from "./pages/ErrorPage"

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "art-exhibit",
        element: <ArtExhibit />,
      },
      {
        path: "artists",
        element: <Artists />,
      },
      {
        path: "genres",
        element: <Genre />,
      },
      {
        path: "artwork/:id",
        element: <Artwork />,
      },
    ],
  },
]

export default routes
