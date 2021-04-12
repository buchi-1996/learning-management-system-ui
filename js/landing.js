const toggleMenu = document.querySelector('.toggle');
const body = document.getElementById('landing-body');


const toggleCourseModules = (e) => {
    console.log();
    const nav = e.target.parentElement.previousElementSibling;
    nav.classList.toggle('open');
    body.classList.toggle('overflow')
}

toggleMenu.addEventListener('click', toggleCourseModules);