let cartIcon = document.getElementById("cart-icon-logo");
let checkInPage = document.getElementById("sothela-bhai");


cartIcon.addEventListener("click", openCheckIn);

function openCheckIn() {
    if (checkInPage.style.display === "none") {
        checkInPage.style.display = "block";
    } else {
        checkInPage.style.display = "none";
    }
}


function closeCheckPage(){
    if (checkInPage.style.display==="block") {
        checkInPage.style.display = "none";
    }
    else {
        checkInPage.style.display = "none";
    }
}

let closeBCheck = document.getElementById("closeBCheck");

closeBCheck.addEventListener("click", closeCheckPage);


// Select elements
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const counter = document.getElementById('counter');

console.log(minusBtn);
// Convert text to number
let count = parseInt(counter.textContent);

// Increase count
plusBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});

// Decrease count (but not below 1)
minusBtn.addEventListener('click', () => {
    if (count > 1) {
        count--;
        counter.textContent = count;
    }
});


const minus1 = document.querySelector('.minus1');
    const plus1 = document.querySelector('.plus1');
    const counter1 = document.querySelector('.counter1'); 

    // Ensure the input starts with a valid number
    counter1.value = counter1.placeholder || 1; 

    // Increase count
    plus1.addEventListener('click', () => {
        counter1.value = parseInt(counter1.value) + 1;
    });

    // Decrease count (but not below 1)
    minus1.addEventListener('click', () => {
        if (parseInt(counter1.value) > 1) {
            counter1.value = parseInt(counter1.value) - 1;
        }
    });  



    // to update id and products 


    // Select elements
const totalPriceElement = document.getElementById("total_prize");
const cartItemsContainer = document.querySelector(".so-list-items");

// Function to update total price
function updateTotalPrice() {
    let total = 0;
    
    // Select all products in the cart
    const products = cartItemsContainer.querySelectorAll(".cards");
    
    products.forEach(product => {
        const priceElement = product.querySelector("#prize");
        const counterElement = product.querySelector("#counter");
        
        // Convert price and quantity to numbers
        let price = parseInt(priceElement.textContent.replace("$", ""));
        let quantity = parseInt(counterElement.textContent);
        
        total += price * quantity; // Calculate total
    });

    // Update the total price display
    totalPriceElement.textContent = `Total Amount: $${total}`;
}

// Attach event listeners to + and - buttons
cartItemsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("plus") || event.target.classList.contains("minus")) {
        const productCard = event.target.closest(".cards");
        const counterElement = productCard.querySelector("#counter");
        let quantity = parseInt(counterElement.textContent);
        
        if (event.target.classList.contains("plus")) {
            quantity++; // Increase quantity
        } else if (event.target.classList.contains("minus") && quantity > 1) {
            quantity--; // Decrease quantity (not below 1)
        }
        
        counterElement.textContent = quantity; // Update quantity on UI
        updateTotalPrice(); // Recalculate total price
    }
});

// Initial total price calculation
updateTotalPrice();


