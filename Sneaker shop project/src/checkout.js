
//we have defined our variables in our javascript and we have targeted their id
let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');




let cartItems = JSON.parse(localStorage.getItem('cart')) || [];//Here the get retrieved from the browser's local storage and if there is no it becomes empty 

//below the total cartCount gets displayed in our checkout page
let calculation = () => {
    const cartItemsContainer = document.getElementById("cart-count").textContent = cartItems.length;
};

calculation();