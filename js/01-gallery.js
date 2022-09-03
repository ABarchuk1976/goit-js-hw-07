import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
let markup = '';

for (const img of galleryItems) {
  markup += `<div class="gallery__item">
		<a class="gallery__link" href="${img.original} title="${img.description}">
			<img class="gallery__image"
				src=${img.preview} 
				data-source=${img.original} 
				alt="${img.description}" 
			/>
		</a>
	</div>`;
}

galleryRef.insertAdjacentHTML('beforeend', markup);

galleryRef.addEventListener('click', (event) => {
  if (event.target.tagName !== 'IMG') return;

  event.preventDefault();

  const instance = basicLightbox.create(
    `<img src=${event.target.dataset.source} width="80%">`
  );

  instance.show();

  document.addEventListener('keydown', (eventKeyboard) => {
    console.log(eventKeyboard.key);
    if (eventKeyboard.key === 'Escape') instance.close();
  });
});
