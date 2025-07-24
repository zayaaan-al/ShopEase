async function fetchdata() {
    try{
        const res = await fetch("https://fakestoreapi.com/products")
        console.log(res);
        const products =await res.json()
        console.log(products);
        str=``
        products.map((pro)=>{
        //     str+=`
        //     <div class="card">
        //     <a href="./details.html?id=${pro.id}" >
        
        //    <center><img class="img1" src="${pro.image}" alt="${pro.title} width="170px height=170px"><br>
        //    <h2>${pro.title}</h2><br>
        //    <h3>Price: $${pro.price}</h3><br>
        //    <p>Category :${pro.category}</p><br>
        //    <p class="description">${pro.description}</P><br>
        //    <p class="rating">Rating : ${pro.rating.rate}</p><br></center>
            
        //     </a></div>
        //     `;
        str+=`
        <div class="card">
  <a href="./details.html?id=${pro.id}">
    <img class="img1" src="${pro.image}" alt="${pro.title}">
    <div class="card-content">
      <h2>${pro.title}</h2>
      <h3>Price: $${pro.price}</h3>
      <p class="category">Category: ${pro.category}</p>
      <p class="description">${pro.description}</p>
      <p class="rating">Rating: ${pro.rating.rate}</p>
    </div>
  </a>
</div>
`
        }) 

        document.getElementById("container").innerHTML=str    

    } catch (error) {
        console.log(error);
        
    }
    
    
    
}


fetchdata()
 const menuIcon = document.getElementById('menuIcon');
  const navLinks = document.getElementById('navLinks');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

