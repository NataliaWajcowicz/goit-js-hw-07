import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);

createGalleryItems();

function createGalleryItems() {
   for( const item of galleryItems) {
       const galleryElements = gallery.insertAdjacentHTML("beforeEnd", `<div class='gallery__item'><a class='gallery__link' href='${item.original}'><img class='gallery__image' src='${item.preview}' data-source='${item.original}' alt='${item.description}'>`);
       
        
       
        
    }
}