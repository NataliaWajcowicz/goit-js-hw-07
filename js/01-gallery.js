import { galleryItems } from './gallery-items.js';
// Change code below this line

const instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="" alt="orginal image"/>
    </div>
    `,
    {
        closable: true,
    }
);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((element) => {
    const item = document.createElement("div");
    item.classList.add("gallery__item");
    gallery.append(item);
    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = element.original;
    item.append(link);
    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src = element.preview;
    image.alt = element.description;
    image.dataset.source = element.original;
    link.append(image);
});

gallery.addEventListener("click", (event) => {
    event.preventDefault();
    const clickedElement = event.target;
    if (clickedElement.nodeName !== "IMG") {
        return;
    }

    
    const modal = instance.element();
    const modalImage = modal.querySelector("img");
    modalImage.src = clickedElement.dataset.source;
    modalImage.alt = clickedElement.alt;
    instance.show();

});










