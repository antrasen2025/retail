// // const products = [
// //   { id: 1, name: "Sunglasses", price: 25, img: "https://tse3.mm.bing.net/th/id/OIP.DhfBY-mgoxaZcJfe6hcX7wHaE6?rs=1&pid=ImgDetMain" },
// //   { id: 2, name: "Headphones", price: 49, img: "https://img.freepik.com/premium-photo/headphones_920207-9718.jpg" },
// //   { id: 3, name: "Watch", price: 80, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg" },
// //   { id: 4, name: "Backpack", price: 60, img: "https://tse3.mm.bing.net/th/id/OIP.mRdb_3K_7XetlonnsiBazAHaIg?rs=1&pid=ImgDetMain" },
// //   { id: 5, name: "Sneakers", price: 70, img: "https://tse1.mm.bing.net/th/id/OIP.0lX9-bmj2Ei64EjrtfWA-QHaE8?w=224&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
// //   { id: 6, name: "Fitness Band", price: 30, img: "https://tse1.mm.bing.net/th/id/OIP.mU40wbogVjn45OFnDy6LsQHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5" }
// // ];

// // const cart = JSON.parse(localStorage.getItem("cart")) || [];

// // function renderProducts() {
// //   const container = document.getElementById("product-list");
// //   products.forEach(p => {
// //     const el = document.createElement("div");
// //     el.className = "product";
// //     el.innerHTML = `
// //       <img src="${p.img}" alt="${p.name}" />
// //       <h3>${p.name}</h3>
// //       <p>$${p.price}</p>
// //       <button onclick="addToCart(${p.id})">Add to Cart</button>
// //     `;
// //     container.appendChild(el);
// //   });
// // }

// // function addToCart(id) {
// //   const product = products.find(p => p.id === id);
// //   cart.push(product);
// //   localStorage.setItem("cart", JSON.stringify(cart));
// //   alert(`${product.name} added to cart!`);
// // }

// // if (document.getElementById("product-list")) renderProducts();


// // const products = [
// //   { id: 1, name: "Sunglasses", price: 25, img: "https://tse3.mm.bing.net/th/id/OIP.DhfBY-mgoxaZcJfe6hcX7wHaE6?rs=1&pid=ImgDetMain" },
// //   { id: 2, name: "Headphones", price: 49, img: "https://img.freepik.com/premium-photo/headphones_920207-9718.jpg" },
// //   { id: 3, name: "Watch", price: 80, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg" },
// //   { id: 4, name: "Backpack", price: 60, img: "https://tse3.mm.bing.net/th/id/OIP.mRdb_3K_7XetlonnsiBazAHaIg?rs=1&pid=ImgDetMain" },
// //   { id: 5, name: "Sneakers", price: 70, img: "https://tse1.mm.bing.net/th/id/OIP.0lX9-bmj2Ei64EjrtfWA-QHaE8?w=224&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
// //   { id: 6, name: "Fitness Band", price: 30, img: "https://tse1.mm.bing.net/th/id/OIP.mU40wbogVjn45OFnDy6LsQHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5" },
// //   { id: 7, name: "Smartphone", price: 299, img: "https://tse3.mm.bing.net/th/id/OIP.NqaDxcGa6QYKnbDEbqXnWQHaLl?rs=1&pid=ImgDetMain" },
// //   { id: 8, name: "Laptop", price: 899, img: "https://tse2.mm.bing.net/th/id/OIP.sN04m8AQ-bUkwQ9Ol3vCggHaFs?rs=1&pid=ImgDetMain" },
// //   { id: 9, name: "Bluetooth Speaker", price: 45, img: "https://tse2.mm.bing.net/th/id/OIP.dToaayHY6qhAEn-XW_z77gHaGO?rs=1&pid=ImgDetMain" },
// //   { id: 10, name: "Camera", price: 499, img: "https://tse1.mm.bing.net/th/id/OIP.bx5KVYLIQAHSW6OOdK3pHgHaGh?rs=1&pid=ImgDetMain" },
// //   { id: 11, name: "Gaming Mouse", price: 35, img: "https://tse1.mm.bing.net/th/id/OIP.Jq7SlPeCbtnNqPudBXF1xQHaHa?rs=1&pid=ImgDetMain" },
// //   { id: 12, name: "Keyboard", price: 55, img: "https://tse4.mm.bing.net/th/id/OIP.pqKuvHNrSVU1q_B15x5eLAHaFI?rs=1&pid=ImgDetMain" }
// // ];

// // const cart = JSON.parse(localStorage.getItem("cart")) || [];

// // function renderProducts() {
// //   const container = document.getElementById("product-list");
// //   if (!container) return;
// //   products.forEach(p => {
// //     const el = document.createElement("div");
// //     el.className = "product";
// //     el.innerHTML = `
// //       <img src="${p.img}" alt="${p.name}">
// //       <h3>${p.name}</h3>
// //       <p>$${p.price}</p>
// //       <button onclick="addToCart(${p.id})">Add to Cart</button>
// //     `;
// //     container.appendChild(el);
// //   });
// // }

// // function addToCart(id) {
// //   const product = products.find(p => p.id === id);
// //   cart.push(product);
// //   localStorage.setItem("cart", JSON.stringify(cart));
// //   alert(`${product.name} added to cart!`);
// //   console.log(`Product added to cart: ${product.name}, $${product.price}`);
// // }


// // function renderCart() {
// //   const container = document.getElementById("cart-items");
// //   if (!container) return;

// //   container.innerHTML = ""; // Clear old cart view

// //   if (cart.length === 0) {
// //     container.innerHTML = "<p>Your cart is empty.</p>";
// //     return;
// //   }

// //   cart.forEach((item, index) => {
// //     const el = document.createElement("div");
// //     el.className = "product";
// //     el.innerHTML = `
// //       <img src="${item.img || ''}" alt="${item.name}" />
// //       <h3>${item.name}</h3>
// //       <p>$${item.price}</p>
// //       <button onclick="removeFromCart(${index})">Remove</button>
// //     `;
// //     container.appendChild(el);
// //   });
// // }


// // function removeFromCart(index) {
// //   cart.splice(index, 1); // Remove item at that index
// //   localStorage.setItem("cart", JSON.stringify(cart));
// //   renderCart(); // Re-render the cart after removal
// //   console.log("Item removed from cart.");
// // }

// // renderProducts();
// // renderCart();


// // PRODUCT DATA
// const products = [
//   { id: 1, name: "Sunglasses", price: 25, img: "https://tse3.mm.bing.net/th/id/OIP.DhfBY-mgoxaZcJfe6hcX7wHaE6?rs=1&pid=ImgDetMain" },
//   { id: 2, name: "Headphones", price: 49, img: "https://img.freepik.com/premium-photo/headphones_920207-9718.jpg" },
//   { id: 3, name: "Watch", price: 80, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=wood-wristwatch-time-190819.jpg&fm=jpg" },
//   { id: 4, name: "Backpack", price: 60, img: "https://tse3.mm.bing.net/th/id/OIP.mRdb_3K_7XetlonnsiBazAHaIg?rs=1&pid=ImgDetMain" },
//   { id: 5, name: "Sneakers", price: 70, img: "https://tse1.mm.bing.net/th/id/OIP.0lX9-bmj2Ei64EjrtfWA-QHaE8?w=224&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
//   { id: 6, name: "Fitness Band", price: 30, img: "https://tse1.mm.bing.net/th/id/OIP.mU40wbogVjn45OFnDy6LsQHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5" },
//   { id: 7, name: "Smartphone", price: 299, img: "https://tse3.mm.bing.net/th/id/OIP.NqaDxcGa6QYKnbDEbqXnWQHaLl?rs=1&pid=ImgDetMain" },
//   { id: 8, name: "Laptop", price: 899, img: "https://tse2.mm.bing.net/th/id/OIP.sN04m8AQ-bUkwQ9Ol3vCggHaFs?rs=1&pid=ImgDetMain" },
//   { id: 9, name: "Bluetooth Speaker", price: 45, img: "https://tse2.mm.bing.net/th/id/OIP.dToaayHY6qhAEn-XW_z77gHaGO?rs=1&pid=ImgDetMain" },
//   { id: 10, name: "Camera", price: 499, img: "https://tse1.mm.bing.net/th/id/OIP.bx5KVYLIQAHSW6OOdK3pHgHaGh?rs=1&pid=ImgDetMain" },
//   { id: 11, name: "Gaming Mouse", price: 35, img: "https://tse1.mm.bing.net/th/id/OIP.Jq7SlPeCbtnNqPudBXF1xQHaHa?rs=1&pid=ImgDetMain" },
//   { id: 12, name: "Keyboard", price: 55, img: "https://tse4.mm.bing.net/th/id/OIP.pqKuvHNrSVU1q_B15x5eLAHaFI?rs=1&pid=ImgDetMain" }
// ];

// // Initialize cart
// const cart = JSON.parse(localStorage.getItem("cart")) || [];

// // RENDER PRODUCTS ON HOMEPAGE
// function renderProducts() {
//   const container = document.getElementById("product-list");
//   if (!container) return;

//   container.innerHTML = "";

//   products.forEach(p => {
//     const card = document.createElement("div");
//     card.className = "product";
//     card.innerHTML = `
//       <img src="${p.img}" alt="${p.name}" />
//       <h3>${p.name}</h3>
//       <p>$${p.price}</p>
//       <button class="add-to-cart-btn" data-id="${p.id}">Add to Cart</button>
//     `;
//     container.appendChild(card);
//   });

//   // Add event listeners to buttons
//   const buttons = container.querySelectorAll(".add-to-cart-btn");
//   buttons.forEach(btn => {
//     btn.addEventListener("click", () => {
//       const id = parseInt(btn.dataset.id);
//       addToCart(id);
//     });
//   });
// }

// // ADD TO CART
// function addToCart(id) {
//   const product = products.find(p => p.id === id);
//   if (product) {
//     cart.push(product);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert(`${product.name} added to cart!`);
//     console.log(`Product added: ${product.name}, $${product.price}`);
//   }
// }

// // RENDER CART
// function renderCart() {
//   const container = document.getElementById("cart-items");
//   if (!container) return;

//   container.innerHTML = "";

//   if (cart.length === 0) {
//     container.innerHTML = "<p>Your cart is empty.</p>";
//     return;
//   }

//   cart.forEach((item, index) => {
//     const el = document.createElement("div");
//     el.className = "product";
//     el.innerHTML = `
//       <img src="${item.img}" alt="${item.name}" />
//       <h3>${item.name}</h3>
//       <p>$${item.price}</p>
//       <button class="remove-btn" data-index="${index}">Remove</button>
//     `;
//     container.appendChild(el);
//   });

//   // Add remove event listeners
//   const removeButtons = container.querySelectorAll(".remove-btn");
//   removeButtons.forEach(btn => {
//     btn.addEventListener("click", () => {
//       const idx = parseInt(btn.dataset.index);
//       removeFromCart(idx);
//     });
//   });
// }

// // REMOVE FROM CART
// function removeFromCart(index) {
//   if (index >= 0 && index < cart.length) {
//     const removed = cart.splice(index, 1)[0];
//     localStorage.setItem("cart", JSON.stringify(cart));
//     renderCart();
//     console.log(`Removed from cart: ${removed.name}`);
//   }
// }

// // LISTEN FOR NEW PRODUCT FORM
// const newProductForm = document.getElementById("new-product-form");
// if (newProductForm) {
//   newProductForm.addEventListener("submit", e => {
//     e.preventDefault();
//     const name = document.getElementById("new-name").value.trim();
//     const price = parseFloat(document.getElementById("new-price").value);
//     const img = document.getElementById("new-img").value.trim();

//     if (!name || isNaN(price) || !img) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     const newItem = {
//       id: products.length + 1,
//       name,
//       price,
//       img
//     };

//     products.push(newItem);
//     localStorage.setItem("products", JSON.stringify(products)); // Optional: save list
//     renderProducts();
//     newProductForm.reset();
//     alert("Your product was added!");
//     console.log("User added new product:", newItem);
//   });
// }
// const form = document.getElementById("contact-form");
//   if (form) {
//     form.addEventListener("submit", e => {
//       e.preventDefault();

//       const name = document.getElementById("name")?.value.trim();
//       const email = document.getElementById("email")?.value.trim();
//       const message = document.getElementById("message")?.value.trim();
//       const file = document.getElementById("file")?.files[0];

//       alert("Thank you! Your message has been sent.");
//       console.log("Contact Form Submission:");
//       console.log("Name:", name);
//       console.log("Email:", email);
//       console.log("Message:", message);
//       console.log("Uploaded File:", file ? file.name : "No file uploaded");
//     });
//   }
// // INITIALIZE PAGES
// renderProducts();
// renderCart();





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

    // Trigger GA4 event
    gtag('event', 'add_to_cart', {
      product_name: product.name,
      product_price: product.price,
      product_category: 'Accessories' // Or use product.category if defined
    });
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
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;
    container.appendChild(el);
  });

  container.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const i = parseInt(btn.dataset.index);
      removeFromCart(i);
    });
  });
}

function removeFromCart(index) {
  if (index >= 0 && index < cart.length) {
    const removed = cart.splice(index, 1)[0];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    console.log("❌ Removed from cart:", removed);

     // GA4 Event
    gtag('event', 'remove_from_cart', {
      product_name: removed.name,
      product_price: removed.price
    });
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
    
    gtag('event', 'form_submit', {
      form_type: 'contact_form',
      name: name,
      email: email,
      message_length: message.length
    });

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

      // GA4 Event
      gtag('event', 'login', {
        method: 'email_password',
        user_role: 'signed_in',
        username: username
      });

      // Optionally: Set user property
      gtag('set', {
        user_properties: {
          role: 'signed_in'
        }
      });
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

