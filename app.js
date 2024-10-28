// fetch products from the API

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.log("Error while fetching the products", error);
  }
}
// display products on web page using dom manipulation

function displayProducts(products){
    const productContainer =  document.getElementById('product-container');

    products.forEach(product =>{
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')


        const productImage = document.createElement('img')
        productImage.src = product.image;
        productImage.alt = product.title;

        const productTitle = document.createElement('h2');
        productTitle.textContent = product.title;

        const productDescription = document.createElement('p')
        productDescription.textContent = `${product.description.slice(0, 100)}...`;

        const productPrice = document.createElement('span')
        productPrice.textContent = `Price: $₹{product.price}`;
    })
}