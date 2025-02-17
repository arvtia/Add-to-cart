function storeAndRetrieve() {
    localStorage.setItem("product", JSON.stringify({ name: "T-Shirt", price: 300 }));
    console.log(localStorage.getItem("product")); // Should now work
}
storeAndRetrieve();

localStorage.setItem("school", JSON.stringify({name:"kerala school", pincode: "110064", medium:"english"}));
let product = JSON.parse(localStorage.getItem("product"));
let school = JSON.parse(localStorage.getItem("school") );

function addToCart(id, name, price) {
    let cart =JSON.parse(localStorage.getItem("cart")) || [];

    //checking if product already exists
    let existingProfuct = cart.find(iska => iska.id == id);
    if (existingProfuct) {
        existingProfuct.quantity += 1; //Increase quantity 
    }
    else {
        cart.push({ id, name, price, quantity: 1}); //add new product
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    // alert(`${name} added to cart!`);

}
