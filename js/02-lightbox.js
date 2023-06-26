import { galleryItems } from "./gallery-items.js";

const images = document.querySelector("ul.gallery");

images.addEventListener("click", (e) => {
  e.preventDefault();
});

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

console.log(galleryItems);
