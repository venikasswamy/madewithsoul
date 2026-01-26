const heroImages = [
  " https://smallbiztrends.com/wp-content/uploads/2016/04/handmade-products-video-850x476.jpg ",
  "https://wallpaperaccess.com/full/2558974.jpg"
];

let index = 0;
const hero = document.getElementById("hero");

function changeHeroImage() {
  hero.style.backgroundImage = `url(${heroImages[index]})`;
  index = (index + 1) % heroImages.length;
}

// first load
changeHeroImage();

// change every 4 sec
setInterval(changeHeroImage, 4000);

// ============================
// Handmade Store JavaScript
// ============================

// Product list
const products = [
  { id: 1, name: "Handmade Vase", price: 799, img: "https://i.pinimg.com/originals/e3/02/d9/e302d9b508695d7fd057a52df71fa069.jpg" },
  { id: 2, name: "Wooden Art", price: 1299, img: "https://i.pinimg.com/736x/fa/95/d9/fa95d90045ba9f99756e1480b19ed3e6.jpg" },
  { id: 3, name: "Clay Pot", price: 499, img: "https://koala.sh/api/image/v2-ds4tf-8yzth.jpg?width=1344&height=768&dream" },
  { id: 4, name: "Macrame Wall Decor", price: 999, img: "https://i.etsystatic.com/12236165/r/il/7cd256/4728752931/il_1080xN.4728752931_hrwu.jpg" },
  { id: 5, name: "Earing", price: 399, img: "https://handly.eu/wp-content/uploads/2024/03/handmade-jewelry-1024x585-1.jpg" },
  {id: 6, name: "Polygonal portrait art", price: 799, img: "https://i.pinimg.com/originals/e7/ed/44/e7ed44ec23818a23b01dec2eb83b405d.jpg"},
   {id: 7, name: "Rustic wood frame", price: 499, img: "https://th.bing.com/th/id/OIP.NNjWTngQ2bNr7004aeKqyAHaGJ?w=251&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"},
    {id: 8, name: "Wooden Eyeglasses frame", price: 999, img: "https://tse4.mm.bing.net/th/id/OIP.I0iBZVcS78hzKxVOHr8J9QHaFo?rs=1&pid=ImgDetMain&o=7&rm=3"}

];

// Load cart from storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display products
function displayProducts() {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = products.map(p => `
    <div class="card">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join("");
}

// Add item to cart
function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
  alert("Added to cart!");
}

// Show cart items
function showCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  if (!cartContainer) return;

  let total = 0;
  cartContainer.innerHTML = cart.map((item, index) => {
    total += item.price;
    return `
      <div class="cart-item">
        <span>${item.name} - ₹${item.price}</span>
        <button onclick="removeItem(${index})">❌</button>
      </div>
    `;
  }).join("");

  totalEl.innerText = "Total: ₹" + total;
}

// Remove item
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

// Initialize
displayProducts();
showCart();
function searchProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const container = document.getElementById("products");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query)
  );

  container.innerHTML = filtered.map(p => `
    <div class="card">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join("");
}
const loginBtn = document.getElementById("loginBtn");
const modal = document.getElementById("authModal");
const closeModal = document.getElementById("closeModal");
const switchAuth = document.getElementById("switchAuth");
const modalTitle = document.getElementById("modalTitle");
const submitAuth = document.getElementById("submitAuth");

let isLogin = true;

// open modal
loginBtn.onclick = () => modal.style.display = "flex";

// close modal
closeModal.onclick = () => modal.style.display = "none";

// switch login/signup
switchAuth.onclick = () => {
  isLogin = !isLogin;
  modalTitle.innerText = isLogin ? "Login" : "Sign Up";
  submitAuth.innerText = isLogin ? "Login" : "Sign Up";
  switchAuth.innerText = isLogin ? "Sign up" : "Login";
};

// fake auth (frontend only)
submitAuth.onclick = () => {
  const email = document.getElementById("email").value;
  if (!email) return alert("Enter email");

  alert(isLogin ? "Login successful!" : "Signup successful!");
  modal.style.display = "none";
};
function trackOrder() {
  const id = document.getElementById("orderId").value.trim();
  const result = document.getElementById("orderResult");

  if (!id) {
    result.innerHTML = "❗ Please enter an Order ID.";
    return;
  }

  // Fake order data (demo)
  const orders = {
    "MW1001": "🛠️ Your order is being prepared by the artisan.",
    "MW1002": "📦 Your order has been shipped.",
    "MW1003": "🚚 Your order is out for delivery.",
    "MW1004": "✅ Your order has been delivered."
  };

  if (orders[id]) {
    result.innerHTML = `<b>Status:</b> ${orders[id]}`;
  } else {
    result.innerHTML = "❌ Order ID not found. Please check again.";
  }
}
