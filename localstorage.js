function addToCart(id, name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if product exists
    } else {
        cart.push({ id, name, price, quantity: 1, image });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart(); // Refresh cart display
}

// Function to load and display cart items
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cartItems");
    let totalPrice = 0;
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        cartItems.innerHTML += `
            <tr>
                <td><img src="${item.image}" width="50" height="50" class="img-fluid"></td>
                <td>${item.name}</td>
                <td>$${item.price}</td>

                <td>
                    <button class="btn btn-sm btn-warning" onclick="updateQuantity(${index}, -1)">-</button>
                    ${item.quantity}
                    <button class="btn btn-sm btn-success" onclick="updateQuantity(${index}, 1)">+</button>
                </td>
                
                <td>$${itemTotal}</td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
                </td>
            </tr>
        `;
    });

    document.getElementById("totalPrice").textContent = `$${totalPrice}`;
}

// Function to update item quantity
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1); // Remove item if quantity is 0
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart(); // Refresh cart display
}

// Function to remove an item from the cart
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Remove item

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart(); // Refresh cart display
}

// Function to clear cart
function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}

// Load cart when page loads
window.onload = loadCart;
