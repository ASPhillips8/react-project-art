import { addNewArtwork } from "./fetcher"
import { ArtPiece } from "../types"

const createArtwork = async (artworkData: ArtPiece) => {
  return await addNewArtwork(artworkData)
}

export { createArtwork }
