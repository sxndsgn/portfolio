gsap.registerPlugin(ScrollTrigger);

// Animar cards de proyectos al hacer scroll
gsap.utils.toArray('.projectElement').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 110%',
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: i * 0.15,
    ease: 'power2.out'
  });
});