import { addNewArtwork } from "./fetcher"

const createArtwork = async (artworkData) => {
  return await addNewArtwork(artworkData)
}

export { createArtwork }
