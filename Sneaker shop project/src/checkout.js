// Retrieve cart items from localStorage or initialize empty array
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Select DOM elements with rhyming IDs
const cartCountFlow = document.getElementById('cart-count-flow');
const cartItemsFlow = document.getElementById('cart-items-flow');
const cartTotalFlow = document.getElementById('cart-total-flow');
const notificationFlow = document.getElementById('notification-flow');
const formContainerFlow = document.getElementById('form-container-flow');
const submitFlow = document.getElementById('submit-flow');

// Function to group cart items by name and calculate quantities
function groupCartItemsFlow() {
    const groupedItems = [];
    cartItems.forEach(item => {
        const existingItem = groupedItems.find(grouped => grouped.name === item.name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            groupedItems.push({ ...item, quantity: 1 });
        }
    });
    return groupedItems;
}

// Function to update cart display on checkout page
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

// Function to validate form inputs
function validateFormFlow() {
    // Get form input values
    const name = document.getElementById('name-flow').value.trim();
    const email = document.getElementById('email-flow').value.trim();
    const address = document.getElementById('address-flow').value.trim();
    const phone = document.getElementById('phone-flow').value.trim();
    const payment = document.getElementById('payment-flow').value;

    // Basic validation checks
    if (!name) {
        showNotificationFlow('Please enter your full name');
        return false;
    }
    if (!email || !email.includes('@')) {
        showNotificationFlow('Please enter a valid email address');
        return false;
    }
    if (!address) {
        showNotificationFlow('Please enter your shipping address');
        return false;
    }
    if (!phone || !/^\d{10,}$/.test(phone.replace(/\D/g, ''))) {
        showNotificationFlow('Please enter a valid phone number');
        return false;
    }
    if (!payment) {
        showNotificationFlow('Please select a payment method');
        return false;
    }

    return true;
}

// Function to handle checkout submission
function handleCheckoutFlow() {
    // Validate form inputs
    if (!validateFormFlow()) return;

    // Check if cart is empty
    if (cartItems.length === 0) {
        showNotificationFlow('Your cart is empty');
        return;
    }

    // Simulate order placement (replace with actual API call in production)
    showNotificationFlow('Order placed successfully!');

    // Clear cart
    cartItems = [];
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Update cart display
    updateCartFlow();

    // Reset form
    formContainerFlow.querySelectorAll('input, select').forEach(input => {
        input.value = '';
    });
}

// Add event listener for checkout button
submitFlow.addEventListener('click', handleCheckoutFlow);

// Initialize cart display on page load
updateCartFlow();