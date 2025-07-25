document.addEventListener('DOMContentLoaded', function() {
    // Simulated featured books data (replace with actual data from backend)
    const featuredBooksData = [
      { title: 'Fahrenheit 451', author: 'Ray Bradbury ', cover: 'book1.jpg' },
      { title: 'American Psycho', author: 'Bret Easton Ellis', cover: 'book2.jpg' },
      { title: 'Book 3', author: 'Author 3', cover: 'book3.jpg' }
    ];
  
    // Function to display featured books
    function displayFeaturedBooks() {
      const featuredBooksContainer = document.getElementById('featuredBooksContainer');
  
      featuredBooksData.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
  
        const bookImage = document.createElement('img');
        bookImage.src = `images/${book.cover}`;
        bookImage.alt = `${book.title} by ${book.author}`;
  
        const bookInfo = document.createElement('div');
        bookInfo.classList.add('book-info');
        bookInfo.innerHTML = `<h3>${book.title}</h3><p>By ${book.author}</p>`;
  
        bookItem.appendChild(bookImage);
        bookItem.appendChild(bookInfo);
        featuredBooksContainer.appendChild(bookItem);
      });
    }
  
    // Display featured books when the user clicks the books button
    displayFeaturedBooks();
  
    // Smooth scroll effect for "Shop Now" button
    const shopNowButton = document.querySelector('.btn');
    shopNowButton.addEventListener('click', function(event) {
      event.preventDefault();
      const section = document.getElementById('featuredBooks');
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  