
fetch('app/data/journal.json')
    .then(response => response.json())
    .then(data => {
        let journalEvents = document.querySelector("#journalEvents");
        data.forEach(event =>{

				//creo un div por cada evento
				let eventElem = `
					<div class="journalEvent">
                        <div class="journalText">
                            <h2>${event.date}</h2>
                            <p>${event.description}</p>
                        </div>
                        <img src="${event.img}" alt="${event.title}">
					</div>
				`
				//pinto todos elementos en mi sección
				journalEvents.innerHTML += eventElem;
			})


                //animo la entrada de los eventos
                gsap.set('.journalEvent', { opacity: 0, y: 50 });

                ScrollTrigger.batch('.journalEvent', {
                    start: 'top 85%',
                    onEnter: (elements) => {
                        gsap.to(elements, {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            stagger: 0.2,
                            ease: 'power2.out'
                        });
                    }
                });
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
