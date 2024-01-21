// fetchBooks function
function fetchBooks() {
  // fetch to make a GET request to the Game of Thrones API
  return fetch('https://anapioficeandfire.com/api/books')
    .then((response) => {
      // if the response is ok
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }

      // Parse the response as JSON and return the result
      return response.json();
    })
    .then((books) => {
      // Call the renderBooks function with the JSON-ified data
      renderBooks(books);

      // Return the JSON-ified data for test access
      return books;
    })
    .catch((error) => {
      // Log any errors to the console
      console.error('Error fetching Game of Thrones books:', error);

    
      throw error;
    });
}

// function to render Game of Thrones books (customize this part)
function renderBooks(books) {
  //  log book titles to the console or update the DOM
  books.forEach((book) => {
    console.log('Book Title:', book.name);
    
  });
}

// Call the fetchBooks function when the HTML page is loaded
fetchBooks();

module.exports = { fetchBooks };
