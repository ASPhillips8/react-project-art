export interface ArtPiece {
  id: string
  title: string
  description: string
  genre: string
  year: number
  image: string
  medium: string
  artist: string
}

export interface Artist {
  id: string
  name: string
  artworks: string[]
}

export interface Genre {
  id: string
  name: string
  artworks: string[]
}
