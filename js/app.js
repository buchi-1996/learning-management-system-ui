const passwordViewToggler = document.querySelector('.eye-toggler');
const passwordInput = document.querySelector('#password');
let isOpen = true;
const closeEyeIcon = 'fa-eye-slash';
const openEyeIcon = 'fa-eye';

const togglePasswordView = (e) => {
    console.log(e.target.firstElementChild);
    isOpen = !isOpen;
   if(isOpen === false){
       passwordInput.type = 'text';
       e.target.firstElementChild.className =  `fa ${openEyeIcon}`;
   }else if(isOpen === true){
       passwordInput.type = 'password';
       e.target.firstElementChild.className =  `fa ${closeEyeIcon}`;
   }
}

passwordViewToggler.addEventListener('click', togglePasswordView);