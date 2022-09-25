import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  divGalleryEl: document.querySelector(".gallery"),
};

const insertGalleryEl = galleryItems.map((galleryItem) => {
  const galleryItemEl = document.createElement("div");
  const galleryLinkEl = document.createElement("a");
  const galleryImageEl = document.createElement("img");

  galleryImageEl.classList.add("gallery__image");
  galleryImageEl.setAttribute("src", galleryItem.preview);
  galleryImageEl.setAttribute("alt", galleryItem.description);
  galleryImageEl.dataset.source = galleryItem.original;

  galleryLinkEl.classList.add("gallery__link");
  galleryLinkEl.setAttribute("href", galleryItem.original);

  galleryItemEl.classList.add("gallery__item");

  galleryLinkEl.append(galleryImageEl);
  galleryItemEl.append(galleryLinkEl);

  return galleryItemEl;
});

refs.divGalleryEl.append(...insertGalleryEl);

refs.divGalleryEl.addEventListener("click", onOpenModalImage);

function onOpenModalImage(event) {
  event.preventDefault();
  console.log(event);
  console.log("original image: ", event.target.dataset.source);
}
