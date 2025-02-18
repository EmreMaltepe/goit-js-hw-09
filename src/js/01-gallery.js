import "./init";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { images } from "../data/images";




const list = document.querySelector(".gallery");
const markup = images
  .map(
    (image) =>
      `<li class="gallery-item"><a class="gallery-link" href="${image.original.replace(
        /^<|>$/g,
        ""
      )}"><img class="gallery-image" src="${image.preview.replace(
        /^<|>$/g,
        ""
      )}" alt="${image.description}"/></a></li>`
  )
  .join("");
list.insertAdjacentHTML("beforeend", markup);
new SimpleLightbox(".gallery a",{
  captionsData: "alt",
  captionDelay: 250,
});