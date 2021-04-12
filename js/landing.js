const toggleMenu = document.querySelector('.toggle');


const toggleCourseModules = (e) => {
    console.log();
    const nav = e.target.parentElement.previousElementSibling;
    nav.classList.toggle('open');
}

toggleMenu.addEventListener('click', toggleCourseModules);