import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

galleryItems.forEach((element) => {
    const item = document.createElement("li");
    item.classList.add("gallery__item");
    galleryList.append(item);
    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = element.original;
    item.append(link);
    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.setAttribute('title', `${element.description}`)
    image.src = element.preview;
    image.alt = element.description;
    image.dataset.source = element.original;
    link.append(image);
    
});

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'title', captionDelay:250,
});
gallery.on('show.simpleLightbox', function () {    
});

