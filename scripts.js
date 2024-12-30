document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carouselExample');
    const title = document.getElementById('carousel-title');
    const desc = document.getElementById('carousel-desc');
  
    carousel.addEventListener('slid.bs.carousel', function () {
      const activeItem = carousel.querySelector('.carousel-item.active');
      const newTitle = activeItem.getAttribute('data-caption-title');
      const newDesc = activeItem.getAttribute('data-caption-desc');
  
      // Actualizar el texto dinámicamente
      title.textContent = newTitle;
      desc.textContent = newDesc;
    });
  });
  