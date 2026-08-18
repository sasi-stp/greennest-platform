
/* ==========================================================================
   GreenNest Official Botanical Store Engine
   WhatsApp Hotline: 0770040590 (+94770040590)
   ========================================================================== */

const WHATSAPP_NUMBER = "94770040590";

const foliageProducts = [
  {
    id: 1,
    name: "Monstera Deliciosa (Albo Variegata)",
    category: "Rare Variegated",
    price: 14500,
    badge: "Rare Premium",
    desc: "Exotic white-marbled foliage, highly rooted active growth specimen.",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Philodendron Pink Princess",
    category: "Philodendron",
    price: 8500,
    badge: "Bestseller",
    desc: "Stunning deep burgundy leaves contrasted with vivid neon pink sectorials.",
    image: "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Anthurium Clarinervium (Velvet Leaf)",
    category: "Anthurium",
    price: 11000,
    badge: "Luxury Exotic",
    desc: "Heart-shaped dark emerald velvety leaves with intense crystal white veins.",
    image: "https://images.unsplash.com/photo-1596724806894-399ebbc2764b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Aglaonema Super White & Pink",
    category: "Aglaonema",
    price: 4800,
    badge: "Indoor Special",
    desc: "Easy maintenance, lush dense foliage perfect for living room aesthetics.",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Monstera Adansonii (Swiss Cheese)",
    category: "Monstera",
    price: 3200,
    badge: "Air Purifier",
    desc: "Fast growing trailing vine with aesthetic windowed fenestrations.",
    image: "https://images.unsplash.com/photo-1596724806894-399ebbc2764b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Dracaena Compacta Reflexa",
    category: "Dracaena",
    price: 3900,
    badge: "Office Plant",
    desc: "Glossy deep green rosette foliage thriving in ambient indoor lighting.",
    image: "https://images.unsplash.com/photo-1599685315640-9ceab2f58944?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Codiaeum Croton Sunny Gold",
    category: "Croton",
    price: 2900,
    badge: "Vibrant Color",
    desc: "Fiery yellow-gold and forest green sunburst foliage for bright corridors.",
    image: "https://images.unsplash.com/photo-1596724806894-399ebbc2764b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Philodendron Melanochrysum",
    category: "Philodendron",
    price: 9500,
    badge: "Rare Collector",
    desc: "Black gold velvet climbing philodendron with golden shimmer veins.",
    image: "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?auto=format&fit=crop&w=600&q=80"
  }
];

// Persistent LocalStorage Cart
let greenNestCart = JSON.parse(localStorage.getItem('greenNest_cart')) || [];

function saveCart() {
  localStorage.setItem('greenNest_cart', JSON.stringify(greenNestCart));
  updateCartDisplay();
}

function addToCart(productId) {
  const item = foliageProducts.find(p => p.id === productId);
  if (item) {
    greenNestCart.push(item);
    saveCart();
    showToastNotification(`🌿 Added "${item.name}" to Cart!`);
  }
}

function removeFromCart(index) {
  greenNestCart.splice(index, 1);
  saveCart();
}

function updateCartDisplay() {
  const badge = document.getElementById("cartCountBadge");
  const drawerList = document.getElementById("cartItemList");
  const totalAmountEl = document.getElementById("cartTotalVal");

  if (badge) badge.innerText = greenNestCart.length;
  if (!drawerList) return;

  if (greenNestCart.length === 0) {
    drawerList.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 50px 20px;">
        <i class="fa-solid fa-basket-shopping" style="font-size: 3rem; color: rgba(226, 183, 85, 0.3); margin-bottom: 15px;"></i>
        <p>Your botanical bag is empty.</p>
        <a href="shop.html" style="display: inline-block; margin-top: 15px; color: var(--primary-gold); font-weight: 700;">Explore Plants &rarr;</a>
      </div>`;
    if (totalAmountEl) totalAmountEl.innerText = "LKR 0.00";
    return;
  }

  let subtotal = 0;
  drawerList.innerHTML = greenNestCart.map((item, idx) => {
    subtotal += item.price;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">LKR ${item.price.toLocaleString()}</div>
        </div>
        <button onclick="removeFromCart(${idx})" style="background:none; color:#ef4444; font-size:1.1rem; padding:5px;">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join('');

  if (totalAmountEl) totalAmountEl.innerText = `LKR ${subtotal.toLocaleString()}`;
}

// 1-Click WhatsApp Direct Buy for a Specific Single Plant
function buyViaWhatsApp(productId) {
  const plant = foliageProducts.find(p => p.id === productId);
  if (!plant) return;

  const msg = 
`🌿 *GreenNest - New Plant Order Inquiry* 🌿
----------------------------------------
🌱 *Plant Name:* ${plant.name}
🏷️ *Category:* ${plant.category}
💰 *Price:* LKR ${plant.price.toLocaleString()}
📦 *Status:* In Stock (Ready for Dispatch)

Hello GreenNest team! I would like to purchase this premium foliage plant. Please share the delivery and payment details. Thank you!`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// Checkout Entire Cart via WhatsApp
function checkoutEntireCartWhatsApp() {
  if (greenNestCart.length === 0) {
    showToastNotification("⚠️ Your cart is empty! Please add plants first.");
    return;
  }

  let total = 0;
  let itemsBreakdown = "";

  greenNestCart.forEach((item, index) => {
    total += item.price;
    itemsBreakdown += `${index + 1}. ${item.name} - LKR ${item.price.toLocaleString()}\n`;
  });

  const cartMsg = 
`🌿 *GreenNest - Full Cart Order Request* 🌿
----------------------------------------
*Selected Items:*
${itemsBreakdown}
💵 *Grand Total:* LKR ${total.toLocaleString()}
🚚 *Delivery:* Islandwide Safe Eco-Courier

Hello GreenNest! I would like to confirm the order for these selected plants. Please let me know how to proceed with the payment and dispatch address.`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(cartMsg)}`;
  window.open(url, '_blank');
}

// Toast notification trigger
function showToastNotification(message) {
  const toast = document.getElementById("toastBox");
  if (!toast) return;
  toast.innerHTML = `<i class="fa-solid fa-seedling"></i> ${message}`;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// Global Drawer Events
document.addEventListener("DOMContentLoaded", () => {
  updateCartDisplay();

  const cartBtn = document.getElementById("openCartBtn");
  const closeBtn = document.getElementById("closeCartBtn");
  const overlay = document.getElementById("cartOverlayEl");
  const drawer = document.getElementById("cartDrawerEl");

  if (cartBtn && drawer && overlay) {
    cartBtn.addEventListener("click", () => {
      drawer.classList.add("active");
      overlay.classList.add("active");
    });
    closeBtn.addEventListener("click", () => {
      drawer.classList.remove("active");
      overlay.classList.remove("active");
    });
    overlay.addEventListener("click", () => {
      drawer.classList.remove("active");
      overlay.classList.remove("active");
    });
  }
});
