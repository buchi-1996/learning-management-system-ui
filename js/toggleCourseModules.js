const toggleMenu = document.querySelector('.toggle-menu');


const toggleCourseModules = (e) => {
    console.log(e.target);
    const modules = e.target.nextElementSibling.firstElementChild;
    console.log(modules);
    modules.classList.toggle('slideIn');
    if(modules.classList.contains('slideIn')){
        toggleMenu.innerText = 'Close Modules';
    }else{
        toggleMenu.innerText = 'Show Modules';
    }
}

toggleMenu.addEventListener('click', toggleCourseModules);