function showImage(imageId) {
  const images = document.querySelectorAll('.image');
  images.forEach(image => image.classList.remove('active'));
  const selectedImage = document.getElementById(imageId);
  selectedImage.classList.add('active');
}