
const productsData = [
  { id: 1, name: "Aglaonema Silver Queen", category: "Aglaonema", price: 24.99, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Philodendron Micans", category: "Philodendron", price: 19.99, image: "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Monstera Adansonii", category: "Monstera", price: 29.99, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Scindapsus Pictus Exotica", category: "Pothos", price: 22.99, image: "https://images.unsplash.com/photo-1596724806894-399ebbc2764b?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Dracaena Compacta", category: "Dracaena", price: 18.99, image: "https://images.unsplash.com/photo-1599685315640-9ceab2f58944?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Codiaeum (Croton) Sunny Star", category: "Croton", price: 24.99, image: "https://images.unsplash.com/photo-1596724806894-399ebbc2764b?auto=format&fit=crop&w=400&q=80" }
];

let cart = JSON.parse(localStorage.getItem('greenleaf_cart')) || [];

function saveCart() {
  localStorage.setItem('greenleaf_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(id) {
  const p = productsData.find(i => i.id === id);
  if (p) {
    cart.push(p);
    saveCart();
    showToast("Added " + p.name + " to cart! 🌿");
  }
}

function updateCartUI() {
  const cartBadge = document.getElementById("cartCount");
  const drawerCount = document.getElementById("drawerCount");
  const cartItemsList = document.getElementById("cartItemsList");
  const cartTotal = document.getElementById("cartTotal");

  if (cartBadge) cartBadge.innerText = cart.length;
  if (drawerCount) drawerCount.innerText = cart.length;

  if (!cartItemsList) return;

  if (cart.length === 0) {
    cartItemsList.innerHTML = '<p style="text-align: center; color: #94a3b8; padding: 30px 0;">Your cart is empty.</p>';
    if (cartTotal) cartTotal.innerText = "$0.00";
    return;
  }

  cartItemsList.innerHTML = "";
  let tot = 0;
  cart.forEach((p, idx) => {
    tot += p.price;
    const row = document.createElement("div");
    row.className = "cart-item-row";
    row.innerHTML = `
      <img src="${p.image}">
      <div style="flex:1;">
        <h4 style="font-size:0.85rem;">${p.name}</h4>
        <span style="font-weight:700; color:var(--primary-green);">$${p.price.toFixed(2)}</span>
      </div>
      <button onclick="removeFromCart(${idx})" style="color:#ef4444; background:none;"><i class="fa-solid fa-trash-can"></i></button>
    `;
    cartItemsList.appendChild(row);
  });
  if (cartTotal) cartTotal.innerText = "$" + tot.toFixed(2);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  saveCart();
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (toast) {
    toast.innerText = msg;
    toast.style.display = "block";
    setTimeout(() => { toast.style.display = "none"; }, 2000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartUI();
  const cartOpenBtn = document.getElementById("cartOpenBtn");
  const cartCloseBtn = document.getElementById("cartCloseBtn");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartDrawer = document.getElementById("cartDrawer");

  if (cartOpenBtn && cartDrawer && cartOverlay) {
    cartOpenBtn.addEventListener("click", () => { cartDrawer.classList.add("open"); cartOverlay.classList.add("open"); });
    cartCloseBtn.addEventListener("click", () => { cartDrawer.classList.remove("open"); cartOverlay.classList.remove("open"); });
    cartOverlay.addEventListener("click", () => { cartDrawer.classList.remove("open"); cartOverlay.classList.remove("open"); });
  }
});
