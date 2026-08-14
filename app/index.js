console.log('index.js cargado');


window.addEventListener('scroll', () => {
    const landing = document.querySelector('.landing');
    const scrollY = window.scrollY;
    const altura = landing.offsetHeight;

    const opacidad = 1 - scrollY / (altura * 0.5);
    landing.style.opacity = Math.max(0, opacidad);
});

// fotitos
fetch('app/data/fotos.json')
    .then(response => response.json())
    .then(data => {
        let container = document.querySelector('.fotosBackground');

        data.forEach(foto => {
            let fotoElem = `
        <img src='${foto.src}' class='fotoItem'>
        `
            container.innerHTML += fotoElem;
        });

        let fotos = document.querySelectorAll('.fotoItem');

        // Detectamos si el dispositivo soporta hover de verdad
        // (ratón), o si es táctil (móvil/tablet)
        let esTactil = !window.matchMedia('(hover: hover)').matches;

        if (!esTactil) {
            // Desktop: comportamiento original con hover
            fotos.forEach(img => {
                img.addEventListener('mouseenter', () => {
                    img.style.opacity = 1;
                });
                img.addEventListener('mouseleave', () => {
                    img.style.opacity = 0;
                });
            });
        } else {
            // Móvil/táctil: animación automática en bucle, pero
            // controlada para que solo haya unas pocas fotos
            // visibles a la vez (no cada una a su rollo)
            animarFotosControlado(Array.from(fotos), 3); // mínimo 3 a la vez
        }

    })
    .catch(error => console.error('Error al cargar el JSON:', error));

// Enciende como mucho "maxVisibles" fotos a la vez, de forma aleatoria,
// en vez de dejar que cada foto vaya a su rollo de forma independiente
// (eso podía hacer que muchas coincidieran encendidas al mismo tiempo)
function animarFotosControlado(fotos, maxVisibles) {
    let activas = new Set();

    function encenderUna() {
        if (activas.size >= maxVisibles) return;

        // Elegimos una foto al azar que no esté ya encendida
        let disponibles = fotos.filter(img => !activas.has(img));
        if (disponibles.length === 0) return;

        let img = disponibles[Math.floor(Math.random() * disponibles.length)];
        activas.add(img);
        img.style.opacity = 1;

        // Tiempo que se queda visible (0.6s - 1.3s) — rápido
        let duracionVisible = 600 + Math.random() * 700;
        setTimeout(() => {
            img.style.opacity = 0;
            activas.delete(img);
        }, duracionVisible);
    }

    // Cada poco tiempo (0.2s - 0.6s), intenta encender una foto nueva
    function ciclo() {
        encenderUna();
        let siguiente = 200 + Math.random() * 400;
        setTimeout(ciclo, siguiente);
    }

    // Al arrancar, encendemos varias de golpe para que no tarde
    // en llegar al mínimo de fotos visibles
    for (let i = 0; i < maxVisibles; i++) {
        encenderUna();
    }

    ciclo();
}

//texto, que aparece cuando la persona ve esa parte de la página
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            new TypeIt("#element", { 
    lifeLike: false, 
    speed: 0 
})
	.type("W")
	.pause(157)
	.type("E")
	.pause(182)
	.type("L")
	.pause(149)
	.type("C")
	.pause(77)
	.type("O")
	.pause(186)
	.type("M")
	.pause(99)
	.type("E")
	.pause(112)
	.type(" ")
	.pause(131)
	.type("T")
	.pause(95)
	.type("O")
	.pause(181)
	.type(" ")
	.pause(172)
	.type("M")
	.pause(150)
	.type("Y")
	.pause(99)
	.type(" ")
	.pause(319)
	.type("O")
	.pause(182)
	.type("V")
	.pause(209)
	.type("E")
	.pause(197)
	.type("R")
	.pause(215)
	.type("T")
	.pause(176)
	.type("H")
	.pause(225)
	.type("I")
	.pause(216)
	.type("N")
	.pause(198)
	.type("K")
	.pause(190)
	.type("I")
	.pause(187)
	.type("N")
	.pause(171)
	.type("G")
	.pause(225)
	.type(" ")
	.pause(167)
	.type("C")
	.pause(127)
	.type("O")
	.pause(155)
	.type("R")
	.pause(148)
	.type("N")
	.pause(115)
	.type("E")
	.pause(152)
	.type("R")
	.pause(193)
	.type(".")
	.pause(537)
	.delete(1)
	.pause(510)
	.delete(1)
	.pause(39)
	.delete(1)
	.pause(21)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(29)
	.delete(1)
	.pause(41)
	.delete(1)
	.pause(24)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(29)
	.delete(1)
	.pause(35)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(31)
	.delete(1)
	.pause(39)
	.delete(1)
	.pause(21)
	.delete(1)
	.pause(31)
	.delete(1)
	.pause(31)
	.delete(1)
	.pause(27)
	.delete(1)
	.pause(592)
	.type("P")
	.pause(162)
	.type("O")
	.pause(88)
	.type("R")
	.pause(171)
	.type("T")
	.pause(186)
	.type("F")
	.pause(94)
	.type("O")
	.pause(180)
	.type("L")
	.pause(175)
	.type("I")
	.pause(143)
	.type("O")
	.pause(237)
	.type(".")
	.go();

            observer.disconnect();
        }
    });
});

observer.observe(document.querySelector('.mainContent'));