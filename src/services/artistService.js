import { createArtist, updateArtists } from "./fetcher"

const getOrCreateArtist = async (artistNameInput, artists) => {
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

const updateArtistsWithArtwork = async (artistEntry, artworkId) => {
  artistEntry.artworks.push(artworkId)
  await updateArtists(artistEntry.id, artistEntry)
}

export { getOrCreateArtist, updateArtistsWithArtwork }
