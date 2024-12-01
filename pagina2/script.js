const addSectionButton = document.getElementById('addSectionButton');
        const sidebar = document.getElementById('sidebar');
        const closeSidebarButton = document.getElementById('closeSidebar');
        const eventForm = document.getElementById('eventForm');
        const eventSection = document.getElementById('eventSection');

        addSectionButton.addEventListener('click', () => {
            sidebar.style.display = 'block'; 
        });

        closeSidebarButton.addEventListener('click', () => {
            sidebar.style.display = 'none'; 
        });

        eventForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            
            const title = document.getElementById('eventTitle').value;
            const description = document.getElementById('eventDescription').value;
            const date = document.getElementById('eventDate').value;

            
            const newEvent = document.createElement('section');
            newEvent.classList.add('mensagens');
            newEvent.innerHTML = `
                <div class="mensagem">
                <h2>Palestra: </h2>
                <p>${description}</p>
                <p>${new Date(date).toLocaleString()}</p>
                <button type="button" onclick="cadastrarEvento()" id="buttonEvent"> Cadastrar no Evento</button>
                </div>
            `;

            eventSection.appendChild(newEvent);

            eventForm.reset();
            sidebar.style.display = 'none'; 
        });

        function cadastrarEvento() {
            alert("Cadastrado no evento!");
        }