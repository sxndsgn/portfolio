gsap.registerPlugin(ScrollTrigger);

// Animar cards de proyectos al hacer scroll
fetch('app/data/projects.json')
  .then(response => response.json())
  .then(data => {
    let projectsList = document.querySelector("#projectsList");

    data.forEach(project => {
    });

    // GSAP aquí para animar los cards de proyectos
    gsap.utils.toArray('.projectElement').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power2.out'
      });
    });
  });