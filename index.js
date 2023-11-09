function showImage(imageId) {
  const images = document.querySelectorAll('.image');
  images.forEach(image => image.classList.remove('active'));
  const selectedImage = document.getElementById(imageId);
  selectedImage.classList.add('active');
}

function showImages(imageClass){
  const images = document.querySelectorAll('.image');
  images.forEach(image => image.classList.remove('active'));
  const selectedImages = document.querySelectorAll(imageClass);
  selectedImages.forEach(selectedImg => selectedImg.classList.add('active'));
}