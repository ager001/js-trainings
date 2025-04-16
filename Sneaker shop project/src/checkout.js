
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];//Here the get retrieved from the browser's local storage and if there is no it becomes empty 

//below the total cartCount gets displayed in our checkout page
let calculation = () => {
    const cartItemsContainer = document.getElementById("cart-count").textContent = cartItems.length;
};

calculation();