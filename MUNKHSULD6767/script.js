let products = [
  {
    name: "Office Basic PC",
    category: "office",
    desc: "Intel i5, 8GB RAM, 256GB SSD",
    price: 500
  },
  {
    name: "Developer Pro",
    category: "developer",
    desc: "Intel i7, 16GB RAM, 512GB SSD",
    price: 900
  },
  {
    name: "Design Workstation",
    category: "design",
    desc: "Ryzen 9, 32GB RAM, 1TB SSD",
    price: 1500
  }
];

let cart = 0;
let currentProduct = null;

function renderProducts(list) {
  let container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(p => {
    let div = document.createElement("div");
    div.classList.add("product", p.category);

    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <span class="price">$${p.price}</span>
    `;

    div.onclick = () => openModal(p);
    container.appendChild(div);
  });
}

function filterProducts(category) {
  if (category === "all") {
    renderProducts(products);
  } else {
    let filtered = products.filter(p => p.category === category);
    renderProducts(filtered);
  }
}

function openModal(product) {
  currentProduct = product;

  document.getElementById("modal-title").innerText = product.name;
  document.getElementById("modal-desc").innerText = product.desc;
  document.getElementById("modal-price").innerText = "$" + product.price;

  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function addToCart() {
  cart++;
  document.getElementById("cart-count").innerText = cart;
  closeModal();
}

document.getElementById("search").addEventListener("input", function(e) {
  let value = e.target.value.toLowerCase();

  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  renderProducts(filtered);
});

renderProducts(products);

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (!name || !email || !message) {
    document.getElementById("form-status").innerText = "Please fill all fields.";
    return;
  }

  // Simulate sending
  document.getElementById("form-status").innerText = "Message sent successfully!";

  // Clear form
  document.getElementById("contact-form").reset();
});
