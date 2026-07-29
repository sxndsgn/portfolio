console.log('projects.js cargado');
fetch('app/data/projects.json')
    .then(response => response.json())
    .then(data => {
        // Guardamos los datos globalmente para poder reconstruir la vista
        // de un proyecto si el usuario navega con el historial (popstate)
        window.allProjectsData = data;

        let projectsList = document.querySelector("#projectsList");

        data.forEach(project => {
            let projectElem = `
                <div id="${project.id}" class="projectElement">
                    <div class="projectImg">
                        <img src="${project.img}" alt="${project.title}">
                    </div>
                    <div class="projectInfo">
                        <h2>${project.title}</h2>
                        <p class="projectDate">${project.date}</p>
                        <p>${project.type}</p>
                    </div>
                </div>
            `;
            projectsList.innerHTML += projectElem;
        });

        document.querySelectorAll('.projectElement').forEach(elem => {
            elem.addEventListener('click', () => {
                let id = parseInt(elem.id);
                let project = data.find(p => p.id === id);
                abrirProyecto(project, data);
            });
        });


        //la animación creo que me está dando problemas en mobile, pero no he sido capaz de solucionarlo, 
        // es como que al hacer scroll en el móvil, las cards de los proyectos se van haciendo más y más grandes,
        //admito que no me he atrevido a tocar demasiado. 
        //he comprobado en varios móviles diferentes y solo ha pasado en el mío, así que tampoco sé si será algo puntual
        gsap.set('.projectElement', { opacity: 0, y: 50 });
        ScrollTrigger.batch('.projectElement', {
            start: 'top 85%',
            onEnter: (elements) => {
                gsap.to(elements, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: 'power2.out'
                });
            }
        });

        // Si la página se carga directamente con un hash tipo #project-5,
        // abrimos ese proyecto de entrada (opcional, pero útil si compartes enlaces)
        if (location.hash.startsWith('#project-')) {
            let id = parseInt(location.hash.replace('#project-', ''));
            let project = data.find(p => p.id === id);
            if (project) abrirProyecto(project, data, true);
        }
    })
    .catch(error => console.error('Error al cargar el JSON:', error));


function abrirProyecto(project, allProjects, fromPopState = false) {
    let otrosProyectos = allProjects
        .filter(p => p.id !== project.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    document.querySelector('.projectsContent').style.display = 'none';
    document.querySelector('.mainFooter').style.display = 'none';

    let projectView = document.querySelector('#projectView');
    projectView.innerHTML = '';
    projectView.style.display = 'block';
    projectView.innerHTML = `
    <button class="btnClose">VOLVER</button>

    <div class="projectViewLayout">
        <div class="projectViewLeft">
            <img src="${project.img}" alt="${project.title}" class="mainImg">
        </div>

        <div class="projectViewRight">
            <div class="projectThumbs">
                <img src="${project.img}" alt="" class="thumb active">
                <img src="${project.img2}" alt="" class="thumb">
                <img src="${project.img3}" alt="" class="thumb">
            </div>

            <div class="projectViewInfo">
            <div class="projectViewTop">
                <div class="projectViewEtiquetas">
                    <span>${project.tag1}</span>
                    <span>${project.tag2}</span>
                    <span>${project.tag3}</span>
                </div>
                <div class="projectViewDets">
                    <span>${project.type}</span>
                    <span>${project.date}</span>
                    <span>${project.durartion}</span>
                </div>
            </div>
            <div class="projectViewBottom">
                <h2 class="projectViewTitle">${project.title}</h2>
                <p class="projectViewDesc">${project.description}</p>
            </div>
            </div>
        </div>
    </div>

    <div class="extraMedia">
        ${project.extraMedia ? project.extraMedia.map(media => `
            <img src="${media.src}" alt="">
        `).join('') : ''}
    </div>

    <div class="morePjs">
        <h3>MÁS TRABAJOS</h3>
        <div class="moreGrid">
            ${otrosProyectos.map(p => `
                <div class="moreCard" data-id="${p.id}">
                    <img src="${p.img}" alt="${p.title}">
                    <span>${p.title}</span>
                    <small>${p.type}</small>
                </div>
            `).join('')}
        </div>
    </div>
`;

    window.scrollTo(0, 0);

    // Añadimos una entrada al historial del navegador SOLO si no venimos
    // de un popstate (si no, cada "atrás" generaría un pushState nuevo
    // y el historial se quedaría hecho un lío)
    if (!fromPopState) {
        history.pushState({ projectId: project.id }, '', `#project-${project.id}`);
    }

    document.addEventListener('click', function cerrar(e) {
        if (e.target.classList.contains('btnClose')) {
            cerrarProyecto();
            document.removeEventListener('click', cerrar);
        }
    });

    projectView.querySelectorAll('.thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
            projectView.querySelector('.mainImg').src = thumb.src;
            projectView.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });

    projectView.querySelectorAll('.moreCard').forEach(card => {
        card.addEventListener('click', () => {
            let id = parseInt(card.dataset.id);
            let next = allProjects.find(p => p.id === id);
            if (next) abrirProyecto(next, allProjects);
        });
    });
}

function cerrarProyecto() {
    let projectView = document.querySelector('#projectView');
    projectView.style.display = 'none';
    projectView.innerHTML = '';
    document.querySelector('.projectsContent').style.display = 'block';
    document.querySelector('.mainFooter').style.display = 'flex';
}

// Esto es lo que hace que el botón "atrás" del navegador funcione bien:
// en vez de sacar al usuario de la página, cierra el popup del proyecto.
window.addEventListener('popstate', (e) => {
    if (e.state && e.state.projectId) {
        // El usuario fue "adelante" (o atrás) a un estado con proyecto abierto
        let project = window.allProjectsData?.find(p => p.id === e.state.projectId);
        if (project) abrirProyecto(project, window.allProjectsData, true);
    } else {
        // No hay proyecto en el estado: volvemos al listado
        cerrarProyecto();
    }
});