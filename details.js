let url = window.location.href;
console.log(url);

let urlParams =  new URLSearchParams(url.split('?')[1])
console.log(urlParams);

let id =urlParams.get("id")
console.log(id);

async function getDetails() {
    const res= await fetch(`https://fakestoreapi.com/products/${id}`);
    data= await res.json()
    console.log(data);

document.getElementById("container").innerHTML = `
  <div class="product-wrapper">
    <div class="product-image">
      <img id="img1" src="${data.image}" alt="${data.title}">
    </div>

    <div class="product-details">
      <div id="title">${data.title}</div>
      <div id="category">Category : ${data.category}</div>
      <div id="description">${data.description}</div>
      <div id="rating">Rating : ${data.rating.rate}</div>
      <div id="price">Price : $${data.price}</div>

      <div id="buttons">
        <button id="buy">Buy Now</button>
        <button id="add" onclick="addToCart()">Add to Cart</button>
      </div>
    </div>
  </div>
`;

    document.getElementById("add").addEventListener("click", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(data);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
    window.location.href = "./addproduct.html";
  });
}


getDetails()
 const menuIcon = document.getElementById('menuIcon');
  const navLinks = document.getElementById('navLinks');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

