// script2.js
document.addEventListener('DOMContentLoaded', () => {
  const colorSwatches = document.querySelectorAll('.color-swatch');
  const productImage = document.querySelector('.product-img');
  const addToCartBtn = document.querySelector('.add-to-cart');
  const cartCounter = document.querySelector('.cart-counter');
  const notification = document.querySelector('.cart-notification');
  
  let cartCount = 0;

  // Hover-based color switching
  colorSwatches.forEach(swatch => {
    swatch.addEventListener('mouseenter', () => {
      gsap.to(productImage, {
        duration: 0.4,
        opacity: 0,
        scale: 0.95,
        onComplete: () => {
          productImage.src = swatch.dataset.image;
          gsap.fromTo(productImage, 
            { opacity: 0, scale: 1.05 },
            { duration: 0.4, opacity: 1, scale: 1 }
          );
        }
      });
    });
  });

  // Add to cart functionality
  addToCartBtn.addEventListener('click', () => {
    cartCount++;
    cartCounter.textContent = cartCount;
    
    // Button animation
    gsap.to(cartCounter, {
      duration: 0.3,
      scale: 1.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });

    // Notification animation
    gsap.to(notification, {
      duration: 0.5,
      top: "20px",
      opacity: 1,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(notification, {
          delay: 1.5,
          duration: 0.4,
          top: "-100px",
          opacity: 0
        });
      }
    });
  });

  // Parallax effect
  document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth/2 - e.pageX)/25;
    const yAxis = (window.innerHeight/2 - e.pageY)/25;
    productImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
});