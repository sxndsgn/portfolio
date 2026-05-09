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

        document.querySelectorAll('.fotoItem').forEach(img => {
            img.addEventListener('mouseenter', () => {
                img.style.opacity = 1;
            });
            img.addEventListener('mouseleave', () => {
                img.style.opacity = 0;
            });
        });

    })
    .catch(error => console.error('Error al cargar el JSON:', error));

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

