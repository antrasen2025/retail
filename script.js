




// -------------------------
// Product Catalog & Cart
// -------------------------
const products = [
  { id: 1, name: "Sunglasses", price: 25, img: "https://tse3.mm.bing.net/th/id/OIP.DhfBY-mgoxaZcJfe6hcX7wHaE6?rs=1&pid=ImgDetMain" },
  { id: 2, name: "Headphones", price: 49, img: "https://img.freepik.com/premium-photo/headphones_920207-9718.jpg" },
  { id: 3, name: "Watch", price: 80, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg" },
  { id: 4, name: "Backpack", price: 60, img: "https://tse3.mm.bing.net/th/id/OIP.mRdb_3K_7XetlonnsiBazAHaIg?rs=1&pid=ImgDetMain" },
  { id: 5, name: "Sneakers", price: 70, img: "https://tse1.mm.bing.net/th/id/OIP.0lX9-bmj2Ei64EjrtfWA-QHaE8?w=224&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
  { id: 6, name: "Fitness Band", price: 30, img: "https://tse1.mm.bing.net/th/id/OIP.mU40wbogVjn45OFnDy6LsQHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5" },
  { id: 7, name: "Smartphone", price: 299, img: "https://tse3.mm.bing.net/th/id/OIP.NqaDxcGa6QYKnbDEbqXnWQHaLl?rs=1&pid=ImgDetMain" },
  { id: 8, name: "Laptop", price: 899, img: "https://tse2.mm.bing.net/th/id/OIP.sN04m8AQ-bUkwQ9Ol3vCggHaFs?rs=1&pid=ImgDetMain" },
  { id: 9, name: "Bluetooth Speaker", price: 45, img: "https://tse2.mm.bing.net/th/id/OIP.dToaayHY6qhAEn-XW_z77gHaGO?rs=1&pid=ImgDetMain" },
  { id: 10, name: "Camera", price: 499, img: "https://tse1.mm.bing.net/th/id/OIP.bx5KVYLIQAHSW6OOdK3pHgHaGh?rs=1&pid=ImgDetMain" },
  { id: 11, name: "Gaming Mouse", price: 35, img: "https://tse1.mm.bing.net/th/id/OIP.Jq7SlPeCbtnNqPudBXF1xQHaHa?rs=1&pid=ImgDetMain" },
  { id: 12, name: "Keyboard", price: 55, img: "https://tse4.mm.bing.net/th/id/OIP.pqKuvHNrSVU1q_B15x5eLAHaFI?rs=1&pid=ImgDetMain" }
];

const cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
  const container = document.getElementById("product-list");
  if (!container) return;

  container.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button class="add-to-cart-btn" data-id="${p.id}">Add to Cart</button>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      addToCart(id);
    });
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
    console.log("🛒 Added to cart:", product);
  }
}






function renderCart() {
  const container = document.getElementById("cart-items");
  if (!container) return;

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const el = document.createElement("div");
    el.className = "product";
    el.innerHTML = `
      <img src="${item.img || ''}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <div class="cart-actions">
        <button class="remove-btn">Remove</button>
        <button class="checkout-btn">Checkout</button>
      </div>
    `;

    // ✅ Attach individual button listeners using index directly
    el.querySelector(".remove-btn").addEventListener("click", () => {
      removeFromCart(index);
    });

    el.querySelector(".checkout-btn").addEventListener("click", () => {
      window.location.href = "payment.html";
    });

    container.appendChild(el);
  });
}


function removeFromCart(index) {
  if (index >= 0 && index < cart.length) {
    const removed = cart.splice(index, 1)[0];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    console.log("❌ Removed from cart:", removed);
  }
}

// -------------------------
// Contact Form Listener
// -------------------------
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();
    const file = document.getElementById("file")?.files[0];

    alert("Thank you! Your message has been sent.");
    console.log("📬 Contact Form Submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("File:", file ? file.name : "No file uploaded");
  });
}

// -------------------------
// Sign-In Page Listener
// -------------------------
const signinForm = document.getElementById("signin-form");
if (signinForm) {
  signinForm.addEventListener("submit", e => {
    e.preventDefault();
    const username = document.getElementById("username")?.value.trim();
    const password = document.getElementById("password")?.value.trim();

    if (username && password) {
      alert("Signed in successfully!");
      console.log("🔐 Sign-In Attempt:");
      console.log("Username:", username);
      //   console.log("Password:", password); // Caution: For demo only — never log passwords in real apps!
    } else {
      alert("Please fill in both fields.");
    }
  });
}

// -------------------------
// Initialize
// -------------------------
renderProducts();
renderCart();
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCart();
});




