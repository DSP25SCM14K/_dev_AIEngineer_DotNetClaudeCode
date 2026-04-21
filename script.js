const revealItems = document.querySelectorAll(
  ".section-heading, .architecture, .skill-grid article, .timeline-item, .metric-grid article, .project-card, .closing"
);

for (const item of revealItems) {
  item.classList.add("reveal");
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12 }
);

for (const item of revealItems) {
  observer.observe(item);
}
