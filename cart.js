let cart = [];


function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    cartCount.textContent = storedCart.reduce((sum, item) => sum + item.quantity, 0);
}


if (document.getElementById("cart-items")) {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const checkoutButton = document.getElementById("checkout");

    let storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const updateCartDisplay = () => {
        cartItemsContainer.innerHTML = ""; 
        let totalPrice = 0;

        if (storedCart.length === 0) {
            // If cart is empty
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            totalPriceElement.textContent = "Total: $0";
            checkoutButton.disabled = true; 
            return;
        }

        // If cart has items
        checkoutButton.disabled = false; 
        storedCart.forEach((item, index) => {
            totalPrice += item.price * item.quantity;

            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-details">
                    <p><strong>${item.title}</strong></p>
                    <p>Price: $${item.price}</p>
                    <p>Quantity: 
                        <button class="quantity-control" data-index="${index}" data-action="decrease">-</button> 
                        ${item.quantity} 
                        <button class="quantity-control" data-index="${index}" data-action="increase">+</button>
                    </p>
                    <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
        localStorage.setItem("cart", JSON.stringify(storedCart)); 
    };

    updateCartDisplay();

    // Handle quantity changes
    cartItemsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("quantity-control")) {
            const index = parseInt(e.target.dataset.index, 10);
            const action = e.target.dataset.action;

            if (action === "increase") {
                storedCart[index].quantity += 1;
            } else if (action === "decrease") {
                storedCart[index].quantity -= 1;

                
                if (storedCart[index].quantity <= 0) {
                    storedCart.splice(index, 1);
                }
            }

            localStorage.setItem("cart", JSON.stringify(storedCart)); 
            updateCartDisplay(); 
            updateCartCount(); 
        }
    });

    
if (document.getElementById("checkout")) {
    document.getElementById("checkout").addEventListener("click", () => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        if (storedCart.length > 0) {
            window.location.href = "checkout.html"; // Redirect to checkout page
        }
    });
}

    
}


document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
        const title = e.target.dataset.title;
        const price = parseFloat(e.target.dataset.price);
        const image = e.target.dataset.image;

        // Retrieve cart from localStorage
        cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItem = cart.find((item) => item.title === title);

        if (existingItem) {
            existingItem.quantity += 1; 
        } else {
            cart.push({ title, price, image, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart)); // 
        updateCartCount(); 
        alert(`${title} has been added to your cart!`);
    }
});


updateCartCount();


