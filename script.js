let cart = [];

function addToCart(name, price){

cart.push({name, price});

displayCart();

}

function displayCart(){

let cartList = document.getElementById("cart");
cartList.innerHTML="";

cart.forEach(item => {

let li = document.createElement("li");
li.textContent = item.name + " - $" + item.price;

cartList.appendChild(li);

});

}
