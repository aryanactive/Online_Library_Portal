// Sample inventory data
const inventory = [
    {
      id: 1,
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      genre: 'Genre 1',
      price: 19.99,
      image: 'book1.jpg'
      
    },
    {
      id: 2,
      title: 'American Psycho',
      author: 'Bret Easton Ellis',
      genre: 'Genre 2',
      price: 24.99,
      image: 'book2.jpg'
    },
    // Add
  ];
  
  // Function to display featured books
  function displayFeaturedBooks() {
    const featuredBooksContainer = document.getElementById('featuredBooksContainer');
    featuredBooksContainer.innerHTML = '';
  
    inventory.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');
  
      const bookImage = document.createElement('img');
      bookImage.src = book.image;
      bookElement.appendChild(bookImage);
  
      const bookTitle = document.createElement('h3');
      bookTitle.textContent = book.title;
      bookElement.appendChild(bookTitle);
  
      const bookAuthor = document.createElement('p');
      bookAuthor.textContent = book.author;
      bookElement.appendChild(bookAuthor);
  
      const bookPrice = document.createElement('p');
      bookPrice.textContent = `$${book.price.toFixed(2)}`;
      bookElement.appendChild(bookPrice);
  
      featuredBooksContainer.appendChild(bookElement);
    });
  }
  
  // Call the function to display featured books
  displayFeaturedBooks();
  
  // Here this function will search for the books in the array and return the results
  function searchBooks(query) {
    return inventory.filter(book => book.title.toLowerCase().includes(query.toLowerCase()) || book.author.toLowerCase().includes(query.toLowerCase()));
  }
  
  // Sample event listener for search input
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    const searchResults = searchBooks(query);
  
    // Display search results
    //...
  });