let logoIndex = 0;
function moveSlide(direction) {
  const container = document.getElementById('carouselContainer');
  const items = container.querySelectorAll('.carousel-item');
  const itemWidth = items[0].offsetWidth + 20;
  const totalItems = items.length;
  logoIndex += direction;
  if (logoIndex < 0) logoIndex = totalItems - 1;
  if (logoIndex >= totalItems) logoIndex = 0;
  container.style.transform = `translateX(-${logoIndex * itemWidth}px)`;
}

let videoIndex = 0;
function moveVideo(direction) {
  const container = document.getElementById('videoCarousel');
  const items = container.querySelectorAll('.carousel-item');
  const itemWidth = items[0].offsetWidth + 20;
  const totalItems = items.length;
  videoIndex += direction;
  if (videoIndex < 0) videoIndex = totalItems - 1;
  if (videoIndex >= totalItems) videoIndex = 0;
  container.style.transform = `translateX(-${videoIndex * itemWidth}px)`;
}
