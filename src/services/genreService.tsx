import { createGenre, updateGenre } from "./fetcher"

const getOrCreateGenre = async (genreNameInput, genres) => {
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

const updateGenreWithArtwork = async (genreEntry, artworkId) => {
  genreEntry.artworks.push(artworkId)
  await updateGenre(genreEntry.id, genreEntry)
}

export { getOrCreateGenre, updateGenreWithArtwork }
