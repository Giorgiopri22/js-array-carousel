const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
  ];
  
  const carousel = document.querySelector('.carousel');
  const carouselImage = carousel.querySelector('.carousel-image');
  const prevButton = carousel.querySelector('.carousel-prev');
  const nextButton = carousel.querySelector('.carousel-next');
  const thumbnailsContainer = carousel.querySelector('.thumbnails');
  
  let Index = 0;
  
  function prevImage() {
      Index--;
    if (Index < 0) {
      Index = images.length - 1;
    }
    updateCarousel();
  }
  
  function nextImage() {
    Index++;
    if (Index >= images.length) {
      Index = 0;
    }
    updateCarousel();
  }
  
  function updateCarousel() {
    carouselImage.src = images[Index];
    const thumbnails = thumbnailsContainer.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
      if (index === Index) {
        thumbnail.classList.add('active');
      } else {
        thumbnail.classList.remove('active');
      }
    });
  }


  prevButton.addEventListener('click', prevImage);
  nextButton.addEventListener('click', nextImage);
  
  
  for (let i = 0; i < images.length; i++) {
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
    thumbnail.style.backgroundImage = `url(${images[i]})`;
    thumbnail.addEventListener('click', () => {
      Index = i;
      updateCarousel();
    });
    thumbnailsContainer.appendChild(thumbnail);
  }
  
  updateCarousel();
  