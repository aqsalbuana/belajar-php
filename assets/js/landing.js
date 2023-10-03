// Ambil elemen-elemen yang diperlukan dari DOM
const carouselContainer = document.querySelector(".carousel-container");
const carouselSlides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

let currentSlideIndex = 0;

// Fungsi untuk menampilkan slide saat ini
function showSlide(slideIndex) {
  // Sembunyikan semua slide
  for (const slide of carouselSlides) {
    slide.style.display = "none";
  }
  // Tampilkan slide yang dipilih
  carouselSlides[slideIndex].style.display = "block";
}

// Fungsi untuk menampilkan slide berikutnya
function showNextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= carouselSlides.length) {
    currentSlideIndex = carouselSlides.length - 1; // ubah ke indeks terakhir
  }
  showSlide(currentSlideIndex);
}

// Fungsi untuk menampilkan slide sebelumnya
function showPrevSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = 0; // ubah ke indeks pertama
  }
  showSlide(currentSlideIndex);
}

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentSlideIndex);

// Tambahkan event listener untuk tombol-tombol prev dan next
prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);
