import { createArtist, updateArtists } from "./fetcher"
import { Artist } from "../types"

const getOrCreateArtist = async (
  artistNameInput: string,
  artists: Artist[]
) => {
  let artistEntry = artists.find((artist) => artist.name === artistNameInput)
  if (!artistEntry) {
    artistEntry = {
      id: (artists.length + 1).toString(),
      name: artistNameInput,
      artworks: [],
    }
    await createArtist(artistEntry)
  }
  return artistEntry
}

const updateArtistsWithArtwork = async (
  artistEntry: Artist,
  artworkId: string
) => {
  artistEntry.artworks.push(artworkId)
  await updateArtists(artistEntry.id, artistEntry)
}

export { getOrCreateArtist, updateArtistsWithArtwork }
