// Geavanceerde interactieve effecten voor de hele site

document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.btn');

  // Hover-animatie op knoppen
  btns.forEach(btn => {
    btn.addEventListener('mouseover', () => {
      btn.style.transform = 'scale(1.05)';
      btn.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
    });

    btn.addEventListener('mouseout', () => {
      btn.style.transform = 'scale(1)';
      btn.style.boxShadow = 'none';
    });
  });

  // Fade-in effect bij scrollen
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => {
    observer.observe(el);
  });

  // Smooth scroll voor interne links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Parallax-effect op header achtergrond (optioneel als je die hebt)
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      let offset = window.pageYOffset;
      header.style.backgroundPositionY = offset * 0.5 + 'px';
    });
  }

  // Animatie bij laden pagina (logo of content fade-in)
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.style.opacity = 0;
    setTimeout(() => {
      mainContent.style.transition = 'opacity 1s ease';
      mainContent.style.opacity = 1;
    }, 200);
  }
});