let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  window.location.href = "index.html";
}

const container = document.getElementById("container2");
const totalPriceBox = document.getElementById("totalPrice");

function renderCart() {
  let str = '';
  let total = 0;

  cart.forEach((item, index) => {
    str += `
      <div class="card">
        <img src="${item.image}" width="150px" height="150px" />
        <h2>${item.title}</h2>
        <p class="cart-item-details">Category : ${item.category}</p>
        <p class="cart-item-rating">Rating : ${item.rating.rate} (${item.rating.count})</p>
         <p class="cart-item-price">Price : $${item.price}</p>
        <button class="cart-item-remove" onclick="removeItem(${index})">Remove</button>
      </div>
      
    `;
    total += item.price;
  });

  container.innerHTML = str;
  totalPriceBox.innerHTML = `🛒 Total Price: $${total.toFixed(2)} for ${cart.length} item(s)`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  if (cart.length === 0) {
    window.location.href = "index.html"; 
  } else {
    renderCart();
  }
}

function placeholder(event) {
  event.preventDefault();

   const form = document.getElementById("orderForm");

   if (form.checkValidity()) {
  alert("Order placed successfully!");
  window.location.href = "index.html";
  form.reset();
  } else {
     form.reportValidity();
    }
  localStorage.removeItem("cart");
   
}

renderCart();
 const menuIcon = document.getElementById('menuIcon');
  const navLinks = document.getElementById('navLinks');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });



    

    