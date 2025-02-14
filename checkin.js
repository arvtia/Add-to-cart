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
//this part of the code is not needed in page, you can neither delete it or keep it. its up to you.
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





