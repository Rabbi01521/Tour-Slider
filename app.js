let images = [
  "images/IMG_0174.JPG",
  "images/IMG_0177.JPG",
  "images/IMG_0221.JPG",
  "images/IMG_0222.JPG",
  "images/IMG_0223.JPG",
  "images/IMG_0228.JPG",
  "images/IMG_0229.JPG",
  "images/IMG_0231.JPG",
  "images/IMG_0411.JPG",
  "images/IMG_0415.JPG",
  "images/IMG_20190905_103059.jpg",
  "images/IMG_0441.JPG",
  "images/slider-6.jpg",
];
let imgIndex = 0;
const img = document.getElementById("slider-img");
setInterval(() => {
  if (imgIndex >= images.length) {
    imgIndex = 0;
  }
  let imgUrl = images[imgIndex];
  img.setAttribute("src", imgUrl);
  imgIndex++;
  console.log(images, imgIndex);
}, 2000);
