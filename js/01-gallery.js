import { galleryItems } from "./gallery-items.js";

const images = document.querySelector("ul.gallery");
let instance;

images.addEventListener("click", (e) => {
  e.preventDefault();
  const src = e.target.dataset.source;
  const alt = e.target.alt;

  instance = basicLightbox.create(`<img src=${src} alt=${alt} />`);
  instance.show();
});

document.addEventListener("keydown", (e) => {
    if (e.key === 'Escape') {
        instance.close();
    }
});

console.log(galleryItems);
