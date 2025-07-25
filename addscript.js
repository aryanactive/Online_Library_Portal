// JavaScript (script.js)
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle adding items to the cart
    function addToCart(name, price) {
      const cartItem = {
        name: name,
        price: price
      };
  
      // Check if cart exists in localStorage
      let cart = localStorage.getItem('cart');
      if (!cart) {
        cart = [];
      } else {
        cart = JSON.parse(cart);
      }
  
      // Add item to cart and save to localStorage
      cart.push(cartItem);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Item added to cart!');
    }
  
    // Add event listener to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const name = this.dataset.name;
        const price = parseFloat(this.dataset.price);
        addToCart(name, price);
      });
    });
  
    // Function to display cart and go to payment page
    function displayCart() {
      const cart = JSON.parse(localStorage.getItem('cart'));
      if (!cart || cart.length === 0) {
        alert('Your cart is empty!');
        return;
      }
  
      // Create cart content
      let cartContent = '<h2>Shopping Cart</h2>';
      cartContent += '<ul>';
      cart.forEach(item => {
        cartContent += `<li>${item.name} - $${item.price}</li>`;
      });
      cartContent += '</ul>';
  
      // Add go to payment page button
      cartContent += '<button id="go-to-payment-btn">Go to Payment Page</button>';
  
      // Display cart content
      const cartModal = document.createElement('div');
      cartModal.classList.add('cart-modal');
      cartModal.innerHTML = cartContent;
      document.body.appendChild(cartModal);
  
      // Add event listener to go to payment page button
      const goToPaymentBtn = document.getElementById('go-to-payment-btn');
      goToPaymentBtn.addEventListener('click', function() {
        window.location.href = 'payment.html'; // Redirect to payment page
      });
    }
  
    // Add event listener to show cart option
    const showCartOption = document.createElement('div');
    showCartOption.classList.add('show-cart-option');
    showCartOption.textContent = 'Show Cart';
    document.body.appendChild(showCartOption);
    showCartOption.addEventListener('click', displayCart);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle book description
    function toggleDescription() {
      const description = this.dataset.description;
      alert(description); // Display description (you can customize this)
    }
  
    // Add event listener to each book item to toggle description
    const bookItems = document.querySelectorAll('.book-item');
    bookItems.forEach(item => {
      item.addEventListener('click', toggleDescription);
    });
  });