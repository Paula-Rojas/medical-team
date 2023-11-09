function showImage(imageId) {
  const images = document.querySelectorAll('.image');
  images.forEach(image => image.classList.remove('active'));
  const selectedImages = document.getElementById(imageId);
  selectedImages.forEach(selectedImage => selectedImage.classList.add('active'));
}