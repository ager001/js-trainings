let cartItems = [];
let itemCount = 0;
let selectedColor = 'black';

// Initialize cart and image float effect
function initializeCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        itemCount = cartItems.length;
        document.getElementById('cartCount').textContent = itemCount;
    }
    
    // Initialize floating animation
    startFloatAnimation();
}

function startFloatAnimation() {
    const productImage = document.getElementById('productImg');
    let position = 0;
    let floating = true;

    function animate() {
        if (floating) {
            position += 0.05;
            productImage.style.transform = `translateY(${Math.sin(position) * 10}px)`;
            requestAnimationFrame(animate);
        }
    }
    animate();

    // Pause animation on hover
    productImage.addEventListener('mouseenter', () => floating = false);
    productImage.addEventListener('mouseleave', () => {
        floating = true;
        animate();
    });
}

function updateColorSelection(color) {
    document.querySelectorAll('.color-switch').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.color === color) {
            btn.classList.add('active');
        }
    });
}

function addToCart() {
    itemCount++;
    document.getElementById('cartCount').textContent = itemCount;

    const notification = document.getElementById('cartNotification');
    notification.style.display = 'block';
    
    cartItems.push({
        id: Date.now(),
        name: 'Travis Scott x Jordan low cut',
        price: 4000,
        color: selectedColor,
        quantity: 1,
        image: document.getElementById('productImg').src
    });

    localStorage.setItem('cart', JSON.stringify(cartItems));

    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

// Event Listeners
    // Modify event listeners to include mouseover
document.addEventListener('DOMContentLoaded', () => {
    initializeCart();
    
    document.querySelectorAll('.color-switch').forEach(button => {
        button.addEventListener('mouseover', () => {
            document.getElementById('productImg').src = button.dataset.image;
        });
        
        button.addEventListener('click', () => {
            selectedColor = button.dataset.color;
            updateColorSelection(selectedColor);
            startFloatAnimation();
        });
    });
});
            
           