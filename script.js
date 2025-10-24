// Product Array
const products = [
  { name: "Adidas Tshirt 1", brand: "Adidas", category: "Tshirt", price: 100, popularity: 90, date: "2025-10-10", image: "assets/tshirt1.jpeg" },
  { name: "Adidas Tshirt 2", brand: "Adidas", category: "Tshirt", price: 120, popularity: 80, date: "2025-10-15", image: "assets/tshirt2.jpeg" },
  { name: "Nike Hoodie 1", brand: "Nike", category: "Hoodie", price: 150, popularity: 95, date: "2025-10-12", image: "assets/hodiii1 (1).jpeg" },
  { name: "Nike Hoodie 2", brand: "Nike", category: "Hoodie", price: 130, popularity: 85, date: "2025-10-14", image: "assets/hodiii1 (2).jpeg" },
  { name: "Adidas Hoodie 3", brand: "Adidas", category: "Hoodie", price: 160, popularity: 78, date:
   "2025-10-11", image: "assets/hodiii1 (3).jpeg" },
  { name: "Adidas Hoodie 4", brand: "Adidas", category: "Hoodie", price: 210, popularity: 65, date: "2025-10-11", image: "assets/hodiii1 (4).jpeg" },
  { name: "Adidas Hoodie 5", brand: "Adidas", category: "Hoodie", price: 410, popularity: 55, date: "2025-10-11", image: "assets/hodiii1 (5).jpeg" },
  { name: "Adidas Hoodie 6", brand: "Adidas", category: "Hoodie", price: 80, popularity: 68, date: "2025-10-11", image: "assets/hodiii1 (6).jpeg" },
  { name: "Adidas Tshirt 3", brand: "Adidas", category: "Tshirt", price: 170, popularity: 72, date: "2025-10-11", image: "assets/hodiii1 (7).jpeg" },
  { name: "Adidas Tshirt 4", brand: "Adidas", category: "Tshirt", price: 145, popularity: 82, date: "2025-10-11", image: "assets/tshirt3.jpeg" },
  { name: "Adidas Tshirt 5", brand: "Adidas", category: "Tshirt", price: 95, popularity: 91, date: "2025-10-11", image: "assets/tshirt4.jpeg" },
  { name: "Nike Hoodie 3", brand: "Nike", category: "Hoodie", price: 250, popularity: 96, date: "2025-10-11", image: "assets/tshirt5.jpeg" },
  { name: "Nike Hoodie 4", brand: "Nike", category: "Hoodie", price: 260, popularity: 84, date: "2025-10-11", image: "assets/tshirt6.jpeg" },
  { name: "Nike Hoodie 5", brand: "Nike", category: "Hoodie", price: 135, popularity: 76, date: "2025-10-11", image: "assets/tshirt7.jpeg" },
  { name: "Nike Hoodie 6", brand: "Nike", category: "Hoodie", price: 106, popularity: 65, date: "2025-10-11", image: "assets/tshirt8.jpeg" },

  { name: "Nike Hoodie 7", brand: "Nike", category: "Tshirt", price: 146, popularity: 78, date: "2025-10-11", image: "assets/hodii10 (2).jpeg" },
  { name: "Nike Hoodie 8", brand: "Nike", category: "Tshirt", price: 86, popularity: 81, date: "2025-10-11", image: "assets/hodii10 (3).jpeg" },
  { name: "Nike Hoodie 9", brand: "Nike", category: "Tshirt", price: 186, popularity: 94, date: "2025-10-11", image: "assets/hodii10 (1).jpeg" },
];

const container = document.getElementById("productContainer");
const sortSelect = document.getElementById("sortOptions");
const brandSelect = document.getElementById("brandFilter");
const categorySelect = document.getElementById("categoryFilter");
const priceInput = document.getElementById("priceFilter");

function displayProducts(list) {
  container.innerHTML = "";
  if(list.length === 0) {
    container.innerHTML = "<p>No products found.</p>";
    return;
  }
  list.forEach(p => {
    container.innerHTML += `
      <div class="speclothes" style="width:200px; text-align:center;">
        <img src="${p.image}" alt="${p.name}" style="width:100%; height:200px; object-fit:cover;">
        <p>${p.name} <br>⭐⭐⭐⭐⭐ <br>$${p.price}</p>
      </div>
    `;
  });
}

function filterAndSortProducts() {
  let filtered = [...products];

  // Brand filter
  const brand = brandSelect.value;
  if(brand) filtered = filtered.filter(p => p.brand === brand);

  // Category filter
  const category = categorySelect.value;
  if(category) filtered = filtered.filter(p => p.category === category);

  // Price filter
  const maxPrice = parseFloat(priceInput.value);
  if(!isNaN(maxPrice)) filtered = filtered.filter(p => p.price <= maxPrice);

  // Sorting
  switch(sortSelect.value) {
    case "priceLowHigh":
      filtered.sort((a,b) => a.price - b.price);
      break;
    case "priceHighLow":
      filtered.sort((a,b) => b.price - a.price);
      break;
    case "newest":
      filtered.sort((a,b) => new Date(b.date) - new Date(a.date));
      break;
    case "popular":
      filtered.sort((a,b) => b.popularity - a.popularity);
      break;
  }

  displayProducts(filtered);
}

brandSelect.addEventListener("change", filterAndSortProducts);
categorySelect.addEventListener("change", filterAndSortProducts);
priceInput.addEventListener("input", filterAndSortProducts);
sortSelect.addEventListener("change", filterAndSortProducts);

displayProducts(products);


