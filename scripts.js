// Image Slideshow Script
// Kaydırma düğmeleri
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');

// Kaydırma miktarı
const scrollAmount = 300;

// Sol kaydırma butonu tıklama işlevi
scrollLeftBtn.addEventListener('click', () => {
    document.getElementById('gallery-container').scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

// Sağ kaydırma butonu tıklama işlevi
scrollRightBtn.addEventListener('click', () => {
    document.getElementById('gallery-container').scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});
// Replace the image paths with the correct paths of your images
const headingLampsImages = [
    "heading_lamps/image1.jpg",
    "heading_lamps/image2.jpg",
    "heading_lamps/image3.jpg",
    "heading_lamps/image4.jpg",
    "heading_lamps/image5.jpg",
    "heading_lamps/image6.jpg"
];

// Replace the image paths with the correct paths of your images
const floorLampsImages = [
    "floor_lamps/image1.jpg",
    "floor_lamps/image2.jpg",
    "floor_lamps/image3.jpg",
    "floor_lamps/image4.jpg",
    "floor_lamps/image5.jpg",
    "floor_lamps/image6.jpg"
];

// Replace the image paths with the correct paths of your images
const ledLightingImages = [
    "led_lighting/image1.jpg",
    "led_lighting/image2.jpg",
    "led_lighting/image3.jpg",
    "led_lighting/image4.jpg",
    "led_lighting/image5.jpg",
    "led_lighting/image6.jpg"
];

// Replace the image paths with the correct paths of your images
const readingLampsImages = [
    "reading_lamps/image1.jpg",
    "reading_lamps/image2.jpg",
    "reading_lamps/image3.jpg",
    "reading_lamps/image4.jpg",
    "reading_lamps/image5.jpg",
    "reading_lamps/image6.jpg"
];

const galleryContainers = document.querySelectorAll('.gallery');

function createImageElements(images, container) {
    images.forEach((imagePath) => {
        const img = document.createElement('img');
        img.src = imagePath;
        container.appendChild(img);
    });
}

galleryContainers.forEach((container) => {
    if (container.parentElement.id === 'heading-lamps') {
        createImageElements(headingLampsImages, container);
    } else if (container.parentElement.id === 'floor-lamps') {
        createImageElements(floorLampsImages, container);
    } else if (container.parentElement.id === 'led-lighting') {
        createImageElements(ledLightingImages, container);
    } else if (container.parentElement.id === 'reading-lamps') {
        createImageElements(readingLampsImages, container);
    }
});