let currentIndex = 0;
const projects = document.querySelectorAll('.project');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showProject(index) {
    // Hide all projects
    projects.forEach((project, i) => {
        project.style.display = (i === index) ? 'block' : 'none';
    });
}

function showNextProject() {
    currentIndex = (currentIndex + 1) % projects.length;
    showProject(currentIndex);
}

function showPrevProject() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    showProject(currentIndex);
}

prevButton.addEventListener('click', showPrevProject);
nextButton.addEventListener('click', showNextProject);

// Initialize the carousel to show the first project
showProject(currentIndex);
