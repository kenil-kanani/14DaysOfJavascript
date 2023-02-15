const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");
const second = document.querySelector(".second");

magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
  searchBarContainerEl.classList.toggle("kenil");
});
second.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
  searchBarContainerEl.classList.toggle("kenil");
});