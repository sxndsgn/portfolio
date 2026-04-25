
console.log('main.js cargado');


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
    })
    .catch(error => console.error('Error al cargar el JSON:', error));



fetch('app/data/projects.json')
    .then(response => response.json())
    .then(data => {
        let projectsList = document.querySelector("#projectsList");
        data.forEach(project =>{

				//creo un div por cada proyecto
				let projectElem = `
					<div id="${project.id}" class="projectElement">
                        <div class="projectImg">
                            <img src="${project.img}" alt="${project.title}">
                        </div>

                        <div class="projectInfo">
						    <h2>${project.title}</h2>
                            <p>${project.date}</p>
                            <p>${project.type}</p>
                        </div>

                        
					</div>
				`
				//pinto todos elementos en mi sección
				projectsList.innerHTML += projectElem;
			})
    })
    .catch(error => console.error('Error al cargar el JSON:', error));






    