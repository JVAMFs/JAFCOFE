// Dropdown Menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Slider Gambar
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
}
showSlides();

// Menampilkan Produk Dinamis
const productList = document.getElementById("productList");
const showProductsBtn = document.getElementById("showProducts");

const products = [
  {
    nama: "Kopi Arabika Gayo",
    harga: "Rp 45.000",
    img: "images/produk1.jpg",
    desc: "Rasa halus dengan aroma bunga khas dataran tinggi Gayo.",
  },
  {
    nama: "Kopi Robusta Toraja",
    harga: "Rp 40.000",
    img: "images/produk2.jpg",
    desc: "Cita rasa kuat dengan aftertaste cokelat dan rempah.",
  },
  {
    nama: "Kopi Luwak Premium",
    harga: "Rp 75.000",
    img: "images/produk3.jpg",
    desc: "Kopi langka dengan proses alami, aroma kompleks nan lembut.",
  },
];

let productsShown = false;

showProductsBtn.addEventListener("click", () => {
  productList.innerHTML = "";
  if (!productsShown) {
    products.forEach((p) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${p.img}" alt="${p.nama}">
        <h4>${p.nama}</h4>
        <p>${p.desc}</p>
        <span>${p.harga}</span>
      `;
      productList.appendChild(li);
    });
    showProductsBtn.textContent = "Sembunyikan Produk";
  } else {
    showProductsBtn.textContent = "Tampilkan Daftar Produk";
  }
  productsShown = !productsShown;
});
