const passwordViewToggler = document.querySelector('.eye-toggler');
const passwordInput = document.querySelector('#password');
const closeEyeIcon = 'fa-eye-slash';
const openEyeIcon = 'fa-eye';
let isOpen = true;

const togglePasswordView = (e) => {
    console.log(e.target.firstElementChild);
    isOpen = !isOpen;
   if(isOpen === false){
       passwordInput.type = 'text';
       e.target.firstElementChild.className =  `fa ${openEyeIcon}`;
   }else{
       passwordInput.type = 'password';
       e.target.firstElementChild.className =  `fa ${closeEyeIcon}`;
   }
}

passwordViewToggler.addEventListener('click', togglePasswordView);