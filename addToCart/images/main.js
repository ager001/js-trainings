let shop = document.getElementById('shop');

let shopItemsData = [{
    id:"uuehuedsls",
    name: "Casual Shirt",
    prce: 45,
    description: "Men's Wear",
    img: "img-1.jpg"

}, {
    id:"byyfyoioo",
    name: "Official Shirt",
    prce: 55,
    description: "Men's Wear",
    img: "img-2.jpg"
}, {
    id:"uuhijoi",
    name: "T shirt",
    prce: 15,
    description: "Men's Wear",
    img: "img-3.jpg"
}, {
    id:"szerftioo",
    name: "Official Blazer",
    prce: 110,
    description: "Men's Wear",
    img: "img-4.jpg"
}]

let generateShop =() => {
    return (shop.innerHTML = shopItemsData
        .map((x)=>{
        
        let{id, name, prce, description, img} = x ;
       return `
      <div  id=product-id-${id} class="item">
            <img width="245" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${description}</p>
                <div class="price-quantity">
                    <h2>$${prce}</h2>
                    <div class="buttons">
                        <i class="bi bi-plus"></i>
                        <div id=${id} class="quantity">0</div>
                        <i class="bi bi-dash-lg"></i>
                    
                    </div>
                </div>
            </div>
        </div>

    `;
    }).join(''));
};

generateShop();

