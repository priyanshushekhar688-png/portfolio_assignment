const projectsGrid = document.querySelector('.projects-grid');

async function fetchProjects() {
    try {
        const response = await fetch('http://localhost:5000/api/projects');
        const projects = await response.json();

        // Agar database mein data hai, toh default projects ko replace karo
        if (projects.length > 0) {
            projectsGrid.innerHTML = ''; // Pehle wala content clear karo
            
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

// Page load hote hi data fetch karo
window.onload = fetchProjects;