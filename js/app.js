const passwordViewToggler = document.querySelector('.eye-toggler');
const passwordInput = document.querySelector('#password');
const openEyeIcon = 'fa-eye';
let isOpen = true;

const togglePasswordView = (e) => {
    isOpen = !isOpen;
   if(isOpen === false){
       passwordInput.type = 'text';
       e.target.firstElementChild.classList.add(openEyeIcon);
   }else{
       passwordInput.type = 'password';
       e.target.firstElementChild.classList.remove(openEyeIcon);
   }
}

passwordViewToggler.addEventListener('click', togglePasswordView);