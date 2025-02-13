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