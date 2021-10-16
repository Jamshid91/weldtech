let signInBtn = document.querySelector('.btn-sign-in');
let signIn = document.querySelector('.sign-in');
let signInFixed = document.querySelector('.sign-in-fixed');
let closeSignIn = document.querySelector('.close-signIn');


    signInBtn.addEventListener('click', () => {
        signIn.style.display = 'block'
        signInFixed.style.display = 'block'
    })


closeSignIn.addEventListener('click', () => {
    signIn.style.display = 'none'
    signInFixed.style.display = 'none'
});