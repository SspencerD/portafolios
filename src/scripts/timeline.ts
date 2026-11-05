// Content stays visible without JavaScript or IntersectionObserver support.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      if (!reducedMotion.matches) entry.target.classList.add('timeline-revealed');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.15 });
  document.querySelectorAll('.timeline > li').forEach(item => observer.observe(item));
}
