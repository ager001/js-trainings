// Retrieve cart items from localStorage or initialize empty array
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Select DOM elements with rhyming IDs
const cartCountFlow = document.getElementById('cart-count-flow');
const notificationFlow = document.getElementById('notification-flow');
const cartSidebarFlow = document.getElementById('cart-sidebar-flow');
const cartItemsFlow = document.getElementById('cart-items-flow');
const cartTotalFlow = document.getElementById('cart-total-flow');
const signinFlow = document.getElementById('signin-flow');

// Simulated user authentication state (replace with actual auth in production)
let user = JSON.parse(localStorage.getItem('user')) || null;

// Function to handle sign-in button click
function handleSignInFlow() {
    // Add click event listener to sign-in button
    signinFlow.addEventListener('click', (e) => {
        e.preventDefault();
        if (user) {
            // If user is signed in, show notification with username
            showNotificationFlow(`Already signed in as ${user.username}`);
        } else {
            // Redirect to sign-in page if not signed in
            window.location.href = 'signin.html';
        }
    });
}

// Function to toggle cart sidebar visibility
function toggleCartFlow() {
    // Show cart sidebar when cart icon is clicked
    document.querySelector('.cart-icon-flow').addEventListener('click', () => {
        cartSidebarFlow.classList.add('active');
    });

    // Hide cart sidebar when close button is clicked
    document.querySelector('.close-cart-flow').addEventListener('click', () => {
        cartSidebarFlow.classList.remove('active');
    });
}

// Function to group cart items by name and calculate quantities
function groupCartItemsFlow() {
    // Initialize array for grouped items
    const groupedItems = [];
    cartItems.forEach(item => {
        const existingItem = groupedItems.find(grouped => grouped.name === item.name);
        if (existingItem) {
            // Increment quantity if item exists
            existingItem.quantity += 1;
        } else {
            // Add new item with quantity 1
            groupedItems.push({ ...item, quantity: 1 });
        }
    });
    return groupedItems;
}

// Function to update cart display
function updateCartFlow() {
    // Group items to avoid duplicates
    const groupedItems = groupCartItemsFlow();

    // Update cart item count in navigation
    cartCountFlow.textContent = cartItems.length;

    // Clear previous cart items display
    cartItemsFlow.innerHTML = '';

    // Initialize total price
    let total = 0;

    // Iterate through grouped cart items to display each
    groupedItems.forEach((item, index) => {
        // Extract numerical price from string (e.g., "KES 2,000" -> 2000)
        const priceNumber = parseFloat(item.price.replace(/[^0-9.]/g, ''));

        // Calculate total price for this item (price * quantity)
        const itemTotal = priceNumber * item.quantity;

        // Create cart item element
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item-flow';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details-flow">
                <h4>${item.name}</h4>
                <p>${item.price} x ${item.quantity}</p>
                <button class="delete-item-flow" data-index="${index}">Remove</button>
            </div>
        `;

        // Append item to cart items container
        cartItemsFlow.appendChild(cartItem);

        // Add item total to overall total
        total += itemTotal;
    });

    // Update total display
    cartTotalFlow.textContent = `KES ${total.toFixed(2)}`;

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Add event listeners for delete buttons
    document.querySelectorAll('.delete-item-flow').forEach(button => {
        button.addEventListener('click', function() {
            // Get index of item to remove
            const index = parseInt(this.dataset.index);

            // Find the item name to remove one instance
            const itemName = groupedItems[index].name;

            // Remove one instance of the item from cartItems
            const itemIndex = cartItems.findIndex(item => item.name === itemName);
            if (itemIndex !== -1) {
                cartItems.splice(itemIndex, 1);
            }

            // Update cart display
            updateCartFlow();

            // Show notification
            showNotificationFlow('Item removed from cart');
        });
    });
}

// Function to add items to cart
function addToCartFlow() {
    // Select all add-to-cart buttons
    document.querySelectorAll('.add-to-cart-flow').forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent default link behavior
            e.preventDefault();

            // Get parent product element
            const product = this.closest('.product-flow');

            // Create product item object
            const productItem = {
                name: product.querySelector('.product-title-flow').textContent,
                price: product.querySelector('.price-flow').textContent,
                image: product.querySelector('.product-image-flow').src
            };

            // Add item to cart array
            cartItems.push(productItem);

            // Update cart display
            updateCartFlow();

            // Show notification
            showNotificationFlow('Item added to cart!');

            // Show cart sidebar
            cartSidebarFlow.classList.add('active');
        });
    });
}

// Function to filter products based on category
function filterProductsFlow() {
    // Select all navigation links
    document.querySelectorAll('.nav-link-flow').forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default link behavior
            e.preventDefault();

            // Get filter category from data attribute
            const filter = this.getAttribute('data-filter-flow');

            // Select all product elements
            const products = document.querySelectorAll('.product-flow');

            // Remove active class from all links
            document.querySelectorAll('.nav-link-flow').forEach(l => l.classList.remove('active-flow'));

            // Add active class to clicked link
            this.classList.add('active-flow');

            // Show/hide products based on filter
            products.forEach(product => {
                const categories = product.getAttribute('data-category-flow').split(' ');
                let shouldShow = false;

                if (filter === 'men') {
                    // Show men's and unisex items
                    shouldShow = categories.includes('men') || categories.includes('unisex');
                } else if (filter === 'women') {
                    // Show women's and unisex items
                    shouldShow = categories.includes('women') || categories.includes('unisex');
                } else if (filter === 'kids') {
                    // Show kids' items
                    shouldShow = categories.includes('kids');
                } else if (filter === 'collections') {
                    // Show collection items (e.g., Travis Scott)
                    shouldShow = categories.includes('collections');
                } else if (filter === 'sale') {
                    // Show sale items (price ≤ KES 3,000)
                    shouldShow = categories.includes('sale');
                }

                // Toggle product visibility
                product.style.display = shouldShow ? 'block' : 'none';
            });

            // Show notification for filter applied
            showNotificationFlow(`Filtered to ${filter.charAt(0).toUpperCase() + filter.slice(1)}`);
        });
    });
}

// Function to show notification messages
function showNotificationFlow(message) {
    // Set notification text and show
    notificationFlow.textContent = message;
    notificationFlow.classList.add('show');

    // Hide notification after 2 seconds
    setTimeout(() => {
        notificationFlow.classList.remove('show');
    }, 2000);
}

// Initialize cart and filter functionality on page load
function initCartFlow() {
    // Setup sign-in handler
    handleSignInFlow();

    // Setup cart toggle listeners
    toggleCartFlow();

    // Setup add-to-cart listeners
    addToCartFlow();

    // Setup product filter listeners
    filterProductsFlow();

    // Update cart display
    updateCartFlow();
}

// Run initialization
initCartFlow();