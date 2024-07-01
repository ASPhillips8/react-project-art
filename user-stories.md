# Art Collection

As an art enthusiast, I want to explore and manage artwork in a digital collection.

## Feature 1: Enter the Collection

**User Story:**
Upon launching the app, I want to access the collection by clicking a button on the homepage to view a display of art images.

**Details:**

- Implement a homepage displaying the app title and a button.
- Clicking the button navigates users to the ArtExhibit page, enabling seamless exploration of the art collection.

## Feature 2: Display the Collection and NavBar

**User Story:**
Once on the ArtExhibit page, I want to view artworks and navigate using a NavBar.

**Details:**

- Implement artwork cards displaying each piece with details such as the artist's name and artwork title.
- Fetch data from a local server to populate cards using components like ArtworkCard and ArtworkList.
- Use `useState` and `useEffect` hooks for state management.
- Implement a NavBar with links to ArtExhibit, ArtistPage, and GenrePage using React Router for smooth navigation.

## Feature 3: Art Piece Details

**User Story:**
Clicking on an artwork card, I expect to navigate to a detailed view showing its description, year, medium, and genre.

**Details:**

- Use React Router to dynamically render the ArtDetailsPage based on artwork ID, displaying comprehensive information sourced from the artwork's data.

## Feature 4: Sort Collection

**User Story:**
On the ArtExhibit page, I want to sort artworks by title or artist name.

**Details:**

- Implement sorting functionality using `useState` for state management.
- Use intuitive UI controls like buttons or dropdowns to allow users to sort artworks based on different criteria.

## Feature 5: Search Collection

**User Story:**
On the ArtExhibit page, I want to search artworks by title or artist name.

**Details:**

- Implement search functionality using `useState` for state management.
- Include user-friendly UI controls such as input fields and buttons to facilitate searching based on specified criteria.

## Feature 6: Manage Artists and Genres

**User Story:**
From the ArtExhibit page, I want to explore artists and genres using the NavBar.

**Details:**

- Navigate to ArtistPage to explore artworks categorized by artists.
- Navigate to GenrePage to explore artworks categorized by genres.
- Display artworks using data fetched from the server.

## Feature 7: Add New Artworks

**User Story:**
I want to add a piece of art to the collection by filling out a form.

**Details:**

- Implement a form modal with input fields matching the database structure.
- Use a POST request to update the local server upon submission.
- Ensure the new artwork appears on the ArtExhibitPage.

## Feature 8: Error Handling

**User Story:**
If I navigate to a non-existent page, I want to see a friendly error page (ErrorPage).

**Details:**

- Implement a route in React Router to handle undefined paths, redirecting users to an ErrorPage with clear messaging and navigation options.

## Feature 9: Integrate API (Stretch)

**User Story:**
As a user, I can get more details about art pieces through data with API.

**Details:**

- Integrate a page to allow users to interact with the Chicago Art Museum API.
