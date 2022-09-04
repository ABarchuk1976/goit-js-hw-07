import SimpleLightbox from './simple-lightbox.js';
import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
let markup = '';

for (const img of galleryItems) {
  markup += `<a class="gallery__item" href=${img.original} title="${img.description}">
			<img 
				class="gallery__image"
				src=${img.preview} 
				alt="${img.description}"
			/>
			</a>`;
}

galleryRef.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery__item');
lightbox.close();

galleryRef.addEventListener('click', (event) => {
  if (event.target.tagName !== 'IMG') return;

  lightbox.show;

  event.preventDefault();

  document.addEventListener('keydown', (eventKeyboard) => {
    if (eventKeyboard.key === 'Escape') lightbox.close();
  });
});
