const artWorkUrl = "http://localhost:3001/artworks/"
const artistUrl = "http://localhost:3001/artists/"
const genreUrl = "http://localhost:3001/genres/"

function getData(url) {
  return fetch(url).then((response) => response.json())
}

function fetchArtworks() {
  return getData(artWorkUrl)
}

function fetchArtists() {
  return getData(artistUrl)
}

function fetchGenres() {
  return getData(genreUrl)
}

function fetchArtwork(id) {
  return getData(artWorkUrl + id)
}

function createArtist(artist) {
  return fetch(artistUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(artist),
  }).then((response) => response.json())
}

function createGenre(genre) {
  return fetch(genreUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(genre),
  }).then((response) => response.json())
}

function addNewArtwork(newArtWork) {
  return fetch(artWorkUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArtWork),
  }).then((response) => response.json())
}

function updateArtists(id, artists) {
  return fetch(artistUrl + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ artworks: artists.artworks }),
  }).then((response) => response.json())
}

function updateGenre(id, genre) {
  if (genre.id) {
    return fetch(genreUrl + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ artworks: genre.artworks }),
    }).then((response) => response.json())
  }
}

export {
  fetchArtworks,
  fetchArtists,
  fetchGenres,
  fetchArtwork,
  createArtist,
  createGenre,
  updateArtists,
  updateGenre,
  addNewArtwork,
}
