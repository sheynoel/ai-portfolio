'use strict';

document.documentElement.classList.add('js');

const navigation = document.querySelector('.portfolio-nav');
const navCollapse = document.querySelector('#portfolioNav');

const updateNavigation = () => {
  navigation.classList.toggle('is-scrolled', window.scrollY > 20);
};

updateNavigation();
window.addEventListener('scroll', updateNavigation, { passive: true });

document.querySelectorAll('.portfolio-nav a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
  });
});

document.querySelectorAll('.project-card[role="button"]').forEach((card) => {
  card.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;

    event.preventDefault();
    bootstrap.Modal.getOrCreateInstance(document.querySelector(card.dataset.bsTarget)).show();
  });
});

const certificateModal = document.querySelector('#certificateModal');
const certificateLightbox = document.querySelector('#certificateLightbox');
const certificateImage = document.querySelector('#certificateImage');
const lightboxImage = document.querySelector('#certificateLightboxImage');
const certificateZoom = document.querySelector('#certificateZoom');
const certificateUnavailable = document.querySelector('#certificateUnavailable');

certificateModal?.addEventListener('show.bs.modal', (event) => {
  const card = event.relatedTarget;
  const { title, date, description, image, certificateUnavailable: unavailable } = card.dataset;
  const isUnavailable = unavailable === 'true';

  document.querySelector('#certificateTitle').textContent = title;
  document.querySelector('#certificateDate').textContent = date;
  document.querySelector('#certificateDescription').textContent = description;
  certificateZoom.hidden = isUnavailable;
  certificateUnavailable.hidden = !isUnavailable;

  if (!isUnavailable) {
    certificateImage.src = image;
    certificateImage.alt = `${title} certificate`;
    lightboxImage.src = image;
    lightboxImage.alt = `${title} certificate`;
  }
});

certificateZoom?.addEventListener('click', () => {
  certificateModal.addEventListener('hidden.bs.modal', () => {
    bootstrap.Modal.getOrCreateInstance(certificateLightbox).show();
  }, { once: true });

  bootstrap.Modal.getInstance(certificateModal)?.hide();
});

certificateImage?.addEventListener('error', () => {
  certificateImage.src = '/images/certificates/placeholder.svg';
});

lightboxImage?.addEventListener('error', () => {
  lightboxImage.src = '/images/certificates/placeholder.svg';
});

const revealElements = document.querySelectorAll('[data-reveal]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealElements.forEach((element) => element.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8%', threshold: 0.08 });

  revealElements.forEach((element) => revealObserver.observe(element));
}
