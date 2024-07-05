# React Project Art

## Description

This project is a React-based web application that allows users to explore a curated collection of artworks. It includes features such as browsing artworks, sorting by different criteria, searching for specific artworks, and adding new artworks to the collection.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ASPhillips8/react-project-art.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd react-project-art
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the JSON Server (for mock backend):**
   ```bash
   npm run server
   ```
5. **Start the React application:**
   ```bash
   npm start
   ```
6. **Open your browser and navigate to http://localhost:3000 to view and use the application.**

## Usage

![Demo GIF](./docs/demo.gif)

1. Explore the homepage to learn about the Dr. Lumpy Art Collection and click "Enter Art Exhibit" to view artworks.
2. Navigate through different pages using the navigation bar (Art Exhibit, Artists, Genres).
3. Use Search functionalities on the ArtExhibit page to find specific artworks based off of title.
4. Use Sort functionalities to display artworks based medium or alphabetically by title.
5. Click on artworks to view more details of a particular piece which include the artist, year, genre, and a description. Also navigate back to Art Exhibit page by using Back to the Exhibit button.
6. Add to the collection using button on Art Exhibit page

## Features

- **Home Page**:

  - Introduction to the art collection.
  - Navigation to art exhibit page of the application.

- **Art Exhibit Page**:

  - Displays a collection of artworks.
  - Includes functionality to add new artworks.
  - Allows searching for artworks by title.
  - Supports sorting artworks by medium, artist, etc.

- **Artwork Details Page**:

  - Shows detailed information about a selected artwork.
  - Includes artwork title, artist, year, description, genre, and image.

- **Artists Page**:

  - Lists artists featured in the collection.
  - Provides an account of the number of pieces each artist has in the collection
  - Supports searching for artists by name.

- **Genres Page**:
  - Displays different genres of art.
  - Provides number of examples the collection has of each genre
  - Allows users to explore artworks by genre.

## Technologies Used

• React
• React Router
• json-server (mock backend)
• CSS (for styling)

## Project Structure

- public/: Public assets and static files.
- src/: Source files.
  - components/: Reusable UI components.
  - pages/: Page components representing different views.
  - services/: Service files for API interactions.
  - routes.js: Application routes.
  - App.js: Main application component.
  - index.js: Entry point for the React application.
  - index.css: Global styles.
- db.json: Mock database file.
- README.md: Project documentation.
- user-stories.md: User stories and requirements.

## Future Enhancements

• Implement of user favorite page that displays all pieces liked by a user
• Interactive feature that will display all pieces of a particular artist
• Interactive feature that will display all pieces of a particular genre as well as details of that particular genre
• Implement of API to generate all of collection to allow for a more immersive gallery

## Credits

• Art Institute of Chicago API for providing initial artwork data.
