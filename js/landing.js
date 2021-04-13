const toggleMenu = document.querySelector('.toggle');
const icon = document.querySelector('.icon-menu');
const body = document.getElementById('landing-body');
let isOpen = false;


const toggleCourseModules = (e) => {
    isOpen = !isOpen;
    const nav = e.target.parentElement.previousElementSibling;
    nav.classList.toggle('open');
    body.classList.toggle('overflow');
    console.log(isOpen);
    if(isOpen){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }else{
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}
toggleMenu.addEventListener('click', toggleCourseModules);
