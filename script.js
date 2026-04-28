const projectsGrid = document.querySelector('.projects-grid');

async function fetchProjects() {
    try {
      
        const projects = await response.json();

        if (projects.length > 0) {
            projectsGrid.innerHTML = ''; 
            
            projects.forEach(p => {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.innerHTML = `
                    <h3>${p.title}</h3>
                    <p>${p.description}</p>
                    <small><b>Tech:</b> ${p.tech}</small><br><br>
                    <a href="${p.link}" class="btn secondary" target="_blank">View Project</a>
                `;
                projectsGrid.appendChild(card);
            });
        }
    } catch (error) {
        console.error("Error fetching projects:", error);
    }
}

