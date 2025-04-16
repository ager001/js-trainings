//we have defined our variables in our javascript and we have targeted their id
let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');



//Below we have retrieved any data stored in the local storage and if not we have made it to start a new array
let basket = JSON.parse(localStorage.getItem("data")) || [];

//In this section whenever we a client adds or removes values the number will be displayed on the cart icon

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML =basket.map((x)=> x.item).reduce((x,y)=> x+y,0);
    
};

calculation();//in this sector the selected number of items will now portray in the basket icon in the top right corner

//we are generating cartItems using Javascript

//we have created a function that when we have data on the basket it will display the data, if there is no data it displays otherwise
let generateCartItems = ()=>{ 
        if (basket.length !== 0) {
            
        } else{
            shoppingCart.innerHTML = ``
            label.innerHTML = `
                <h2>Cart is Empty</h2>

                <a href="webstructure.html">
                    <button class="HomeBtn">Back to home</button>
                </a>;
            `
        }
};

generateCartItems();