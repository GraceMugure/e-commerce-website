// select all add to cart buttons 
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Find the place where the cart count is shown in the navbar
const cartCountElement = document.getElementById('cart-count');

//start with cart count at 0
let cartCount = 0;

//Go through each "Add to Cart" button and listen for a click
addToCartButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        cartCount++;
        cartCountElement.textContent = cartCount;
        alert("Item added to Cart");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from refreshing the page
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  
      if (!name || !email || !message) {
        formStatus.textContent = "Please fill out all fields.";
        formStatus.style.color = "red";
        return;
      }
  
      if (!email.match(emailPattern)) {
        formStatus.textContent = "Please enter a valid email address.";
        formStatus.style.color = "red";
        return;
      }
  
      formStatus.textContent = "Message sent successfully!";
      formStatus.style.color = "green";
      form.reset(); // Clear the form fields
    });
  });
  

document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.querySelector("a[href='#']");
    const cartDropdown = document.getElementById("cart-dropdown");
    const checkoutBtn = document.getElementById("checkout-btn");
  
    // Toggle cart dropdown
    cartIcon.addEventListener("click", (e) => {
      e.preventDefault();
      cartDropdown.style.display = (cartDropdown.style.display === "none" || cartDropdown.style.display === "") ? "block" : "none";
    });
  
    // Checkout button functionality
    checkoutBtn.addEventListener("click", () => {
      alert("Proceeding to checkout!");
      // If you have a checkout page, you can redirect there
      // window.location.href = "checkout.html"; // Uncomment to redirect to the checkout page
    });
  
    // Add products to the cart
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItems = [];
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productName = button.getAttribute("data-product-name");
        cartItems.push(productName);
        updateCart();
      });
    });
  
    function updateCart() {
      const cartItemsList = document.getElementById("cart-items");
      cartItemsList.innerHTML = "";
      cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        cartItemsList.appendChild(li);
      });
  
      document.getElementById("cart-count").textContent = cartItems.length;
    }
  });
  

