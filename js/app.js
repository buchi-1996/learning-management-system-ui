const passwordViewToggler = document.querySelector('.eye-toggler');
const passwordInput = document.querySelector('#password');
const closeEyeIcon = 'fa-eye-slash';
let isOpen = true;

const togglePasswordView = (e) => {
    isOpen = !isOpen;
   if(isOpen === false){
       passwordInput.type = 'text';
       e.target.firstElementChild.classList.add(closeEyeIcon);
   }else{
       passwordInput.type = 'password';
       e.target.firstElementChild.classList.remove(closeEyeIcon);
   }
}

passwordViewToggler.addEventListener('click', togglePasswordView);