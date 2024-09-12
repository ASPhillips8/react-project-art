import { createGenre, updateGenre } from "./fetcher"
import { Genre } from "../types"

const getOrCreateGenre = async (genreNameInput: string, genres: Genre[]) => {
  let genreEntry = genres.find((genre) => genre.name === genreNameInput)
  if (!genreEntry) {
    genreEntry = {
      id: (genres.length + 1).toString(),
      name: genreNameInput,
      artworks: [],
    }
    await createGenre(genreEntry)
  }
  return genreEntry
}

const updateGenreWithArtwork = async (genreEntry: Genre, artworkId: string) => {
  genreEntry.artworks.push(artworkId)
  await updateGenre(genreEntry.id, genreEntry)
}

export { getOrCreateGenre, updateGenreWithArtwork }
