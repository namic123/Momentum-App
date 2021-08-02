const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];
const bgImages = document.createElement("img");
bgImages.src = `img/${randomImage}`;
document.body.appendChild(bgImages);