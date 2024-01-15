function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const apiUrl ='https://anapioficeandfire.com/api/books';
  fetch(apiUrl)
  .then(response => {
    if (!response.ok){
      throw new Error(`Failed to fetch books. Status:${response.status}`);
    }
    return response.json()
  })
  .then(data=>{
    renderBooks(data);
  })
  .catch(error => {
    console.error('Error fetching books:',error.message);
  });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
