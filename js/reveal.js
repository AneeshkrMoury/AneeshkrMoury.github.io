/* ============================================================
   reveal.js — Scroll-triggered Fade-in Animations
   ============================================================
   Any element with class="reveal" will animate in when
   it enters the viewport. Just add the class anywhere in HTML.
   ============================================================ */

(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe all .reveal elements on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  });
})();
