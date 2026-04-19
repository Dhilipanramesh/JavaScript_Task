const container = document.getElementById("product-container");
const loader = document.getElementById("loader");

const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const lowBtn = document.getElementById("lowToHigh");
const highBtn = document.getElementById("highToLow");

// Modal
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");

let products = [];

// FETCH DATA (2s LOADER) 
async function fetchData() {
  loader.style.display = "block";

  const start = Date.now();

  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    products = data;

    const elapsed = Date.now() - start;
    const remaining = Math.max(2000 - elapsed, 0);

    setTimeout(() => {
      loader.style.display = "none";
      displayProducts(products);
    }, remaining);

  } catch (err) {
    loader.style.display = "none";
    container.innerHTML = "<p class='error'>Error loading data</p>";
  }
}

//DISPLAY 
function displayProducts(data) {
  container.innerHTML = "";

  data.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${item.image}">
      <h3>${item.title.slice(0,20)}...</h3>
      <p>${item.description.slice(0,60)}...</p>
      <button class="btn">₹ ${item.price}</button>
      <br><br>
      <button class="btn view">View More</button>
    `;

  // VIEW MORE
    div.querySelector(".view").addEventListener("click", () => {
      document.getElementById("modal-img").src = item.image;
      document.getElementById("modal-title").innerText = item.title;
      document.getElementById("modal-desc").innerText = item.description;
      document.getElementById("modal-price").innerText = "₹ " + item.price;

      modal.classList.add("active");
    });

    container.appendChild(div);
  });
}

// CLOSE MODAL
closeBtn.onclick = () => {
  modal.classList.remove("active");
};

// CLICK OUTSIDE TO CLOSE
window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
};

// SEARCH
searchInput.addEventListener("input", () => {
  const val = searchInput.value.toLowerCase();
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(val)
  );
  displayProducts(filtered);
});

//CATEGORY
categorySelect.addEventListener("change", () => {
  const val = categorySelect.value;
  const filtered = val === "all"
    ? products
    : products.filter(p => p.category === val);
  displayProducts(filtered);
});

//SORT
lowBtn.onclick = () => {
  displayProducts([...products].sort((a,b)=>a.price-b.price));
};

highBtn.onclick = () => {
  displayProducts([...products].sort((a,b)=>b.price-a.price));
};

/* INIT */
fetchData();