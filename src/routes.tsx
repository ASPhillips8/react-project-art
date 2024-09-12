import App from "./App"
import ArtExhibit from "./pages/ArtExhibit"
import Artists from "./pages/Artists"
import Artwork from "./pages/Artwork"
import Genres from "./pages/Genres"
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/Home"

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
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
        element: <Genres />,
      },
      {
        path: "artwork/:id",
        element: <Artwork />,
      },
    ],
  },
]

export default routes
