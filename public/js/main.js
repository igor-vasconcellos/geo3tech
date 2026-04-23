/* ============= GEO3Tech - Main JS ============= */
(function () {
  'use strict';

  // ----- Mobile menu toggle -----
  const navToggle = document.getElementById('navToggle');
  const header = document.querySelector('.site-header');
  if (navToggle && header) {
    navToggle.addEventListener('click', function () {
      const isOpen = header.classList.toggle('nav-mobile-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    document.querySelectorAll('#navLinks a').forEach(function (a) {
      a.addEventListener('click', function () {
        header.classList.remove('nav-mobile-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ----- Footer year -----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Reveal on scroll -----
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ----- Count up animation -----
  function animateCount(el, target, suffix, duration) {
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }

  const countEls = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && countEls.length) {
    const cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10) || 0;
          const suffix = el.getAttribute('data-suffix') || '';
          animateCount(el, target, suffix, 2000);
          cio.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    countEls.forEach(function (el) { cio.observe(el); });
  }

  // ----- Contact form -----
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (form && success) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      success.hidden = false;
      form.reset();
      setTimeout(function () { success.hidden = true; }, 3000);
    });
  }
})();