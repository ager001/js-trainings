
//fetched the data in the HTML using getElementById
let shop = document.getElementById('shop');


//Below we have retrieved any data stored in the local storage and if not we have made it to start a new array
let basket = JSON.parse(localStorage.getItem("data")) || [];

//I have generated the shop items using javascript instead of copying pasting using HTML
let generateShop =() => {
    return (shop.innerHTML = shopItemsData
        .map((x)=>{
        
        let{id, name, prce, description, img} = x;
        let search = basket.find((x) => x.id === id)  || [] //here we check id of x is present in the basket if not we return an empty array
       return `
      <div  id=product-id-${id} class="item">
            <img width="245" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${description}</p>
                <div class="price-quantity">
                    <h2>$${prce}</h2>
                    <div class="buttons">
                        <i onclick="increment(${id})" class="bi bi-plus"></i>
                        <div id=${id} class="quantity">
                        ${search.item === undefined ? 0: search.item}
                        </div>
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    
                    </div>
                </div>
            </div>
        </div>

    `;
    }).join(''));
};

generateShop();


// I am making the + and - button get their functionality of increase values and decreasing values respectively
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
    //we have stored in our local storage
    localStorage.setItem("data", JSON.stringify(basket));
    
    //console.log(basket);
    update(selectedItem.id);

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

    // console.log(basket);
    update(selectedItem.id);
    basket = basket.filter((x)=>x.item !== 0 );//in the local storage only the item to be saved but not the ones with zero

    // we have stored our data in the browser's local storage
    localStorage.setItem("data", JSON.stringify(basket));
    
   
};

// I have updated the function to display the numbers when clicked
let update = (id)=> {

    let search = basket.find((x)=> x.id === id);

// I have updated the number of items to be displayed on the amount section that is 0 by default when the increment and decrement button is clicked
    //console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();

};


//In this section whenever we a client adds or removes values the number will be displayed on the cart icon

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML =basket.map((x)=> x.item).reduce((x,y)=> x+y,0);
    
};

calculation();//in this sector the selected number of items will now portray in the basket icon in the top right corner
