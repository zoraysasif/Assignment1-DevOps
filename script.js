document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('searchBox');
    const projectsList = document.getElementById('projectsList');
    const projects = projectsList.getElementsByTagName('li');

    searchBox.addEventListener('input', () => {
        const filter = searchBox.value.toLowerCase();
        for (let i = 0; i < projects.length; i++) {
            const tech = projects[i].getAttribute('data-tech').toLowerCase();
            if (tech.includes(filter)) {
                projects[i].style.display = '';
            } else {
                projects[i].style.display = 'none';
            }
        }
    });
});
