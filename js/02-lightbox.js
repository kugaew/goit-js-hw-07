import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  divGalleryEl: document.querySelector(".gallery"),
};

refs.divGalleryEl.append(...createGallerySrtucture(galleryItems));

function createGallerySrtucture(arrOfGallaryItems) {
  return arrOfGallaryItems.map((galleryItem) => {
    const galleryLinkEl = document.createElement("a");
    const galleryImageEl = document.createElement("img");

    galleryImageEl.classList.add("gallery__image");
    galleryImageEl.setAttribute("src", galleryItem.preview);
    galleryImageEl.setAttribute("alt", galleryItem.description);

    galleryLinkEl.classList.add("gallery__item");
    galleryLinkEl.setAttribute("href", galleryItem.original);

    galleryLinkEl.append(galleryImageEl);

    return galleryLinkEl;
  });
}
