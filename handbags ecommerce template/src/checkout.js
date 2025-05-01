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
            return shoppingCart.innerHTML = basket.map((x)=>{

            let {id, item } = x;
            let search = shopItemsData.find((y)=> y.id === id) || [] ;
            let { img, name, prce} = search

                return `
                 <div class="cart-item">
                  <img width ="100" src=${img}>

                  <div class="details">

                 <div class="title-price-x">
                    <h4 class="title-price">
                        <p class="checkout-name">${name} </p>
                        <p class="checkout-name"> $${prce}</p>
                    </h4>
                    <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                 </div>

                <div class="buttons">
                        <i onclick="increment(${id})" class="bi bi-plus"></i>
                        <div id=${id} class="quantity">${item}</div>
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    
                    </div>

                 <h3>$${item * search.prce}</h3>
                </div>
                 </div>
                

                `;
            });
        } else{
            shoppingCart.innerHTML = ``
            label.innerHTML = `
                <h2>Cart is Empty</h2>

                <a href="webstructure.html">
                    <button class="home-button">Back to home</button>
                </a>;
            `;
        }
};

generateCartItems();

let increment = (id)=> {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id )

    if(search === undefined) {
        basket.push({ 
            id: selectedItem.id,
            item: 1,
        });
    } else{
        search.item += 1;

    }

    generateCartItems();
     update(selectedItem.id);
    //we have stored in our local storage
    localStorage.setItem("data", JSON.stringify(basket));
    
   

};

// I have made the decrement to not go past zero
let decrement = (id)=> {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);


    if(search === undefined) return;

    else if(search.item  === 0) return;
        
    else{
        search.item -= 1;
        
    }
    generateCartItems();
    update(selectedItem.id);
    basket = basket.filter((x)=>x.item !== 0 );//in the local storage only the item to be saved but not the ones with zero

    // we have stored our data in the browser's local storage
    localStorage.setItem("data", JSON.stringify(basket));
    
   
};

let update = (id)=> {

    let search = basket.find((x)=> x.id === id);

// I have updated the number of items to be displayed on the amount section that is 0 by default when the increment and decrement button is clicked
    //console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    TotalAmount();

};

let removeItem = (id)=>{
    let selectedItem = id;
    basket = basket.filter((x)=>x.id !== selectedItem.id);
    generateCartItems();
    TotalAmount();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));

};

let clearCart = ()=>{
    basket = []
    generateCartItems();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
}

let TotalAmount = () => {

    if(basket.length !==0){
        let amount = basket.map((x)=> {
            let{ item, id } = x;
            let search = shopItemsData.find((y)=> y.id === id) || [] ;
           
            return item * search.prce;

        }).reduce((x,y)=> x+y, 0)
        label.innerHTML = `
            <h2>Total Bill : $${amount}</h2>
            <button class="checkout-btn">Checkout</button>
            <button onclick="clearCart()" class="remove-btn">Clear All</button>
        `
    } else return
};

TotalAmount();