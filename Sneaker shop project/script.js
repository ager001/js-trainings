
// Cart System
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartCount = document.getElementById('cart-count');
const notification = document.getElementById('notification');
const cartSidebar = document.getElementById('cartSidebar');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

// Toggle Cart Visibility
document.querySelector('.cart-icon').addEventListener('click', () => {
  cartSidebar.classList.add('active');
});

document.querySelector('.close-cart').addEventListener('click', () => {
  cartSidebar.classList.remove('active');
});

// Update Cart Display
function updateCart() {
  // Update counter
  cartCount.textContent = cartItems.length;
  
  // Update cart items display
  cartItemsContainer.innerHTML = '';
  let total = 0;
  
  cartItems.forEach((item, index) => {
    const priceNumber = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    
    // Create cart item element
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="item-details">
        <h4>${item.name}</h4>
        <p>${item.price}</p>
        <button class="delete-item" data-index="${index}">Remove</button>
      </div>
    `;
    
    cartItemsContainer.appendChild(cartItem);
    total += priceNumber;
  });
  
  // Update total
  cartTotal.textContent = `KES ${total.toFixed(2)}`;
  
  // Save to storage
  localStorage.setItem('cart', JSON.stringify(cartItems));
  
  // Add delete event listeners
  document.querySelectorAll('.delete-item').forEach(button => {
    button.addEventListener('click', function() {
      const index = parseInt(this.dataset.index);
      cartItems.splice(index, 1);
      updateCart();
      showNotification('Item removed from cart');
    });
  });
}

// Add to Cart Functionality
document.querySelectorAll('.product .btn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const product = this.closest('.product');
    
    const productItem = {
      name: product.querySelector('.product-title').textContent,
      price: product.querySelector('.price').textContent,
      image: product.querySelector('img').src
    };
    
    cartItems.push(productItem);
    updateCart();
    showNotification('Item added to cart!');
    cartSidebar.classList.add('active');
  });
});

// Notification System
function showNotification(message) {
  notification.textContent = message;
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}

// Initialize cart on page load
updateCart();
