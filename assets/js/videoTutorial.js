let signInBtn = document.querySelectorAll('.btn-sign-in');
let signIn = document.querySelector('.sign-in');
let signInFixed = document.querySelector('.sign-in-fixed');
let closeSignIn = document.querySelector('.close-signIn');
let navMiddle = document.querySelector('.nav-middle');
let mobileLogo = document.querySelector('.mobile-logo');
let videoTutorialsList =document.querySelectorAll('.video-tutorials-list');

signInBtn.forEach(sign => {
    sign.addEventListener('click', () => {
        signIn.style.display = 'block'
        signInFixed.style.display = 'block'
        navMiddle.style.display = 'none'
        mobileLogo.style.display = 'none'
    })
})


closeSignIn.addEventListener('click', () => {
    signIn.style.display = 'none'
    navMiddle.style.display = 'flex'
    mobileLogo.style.display = 'flex'
    signInFixed.style.display = 'none'
});

videoTutorialsList.forEach(info => {
    info.addEventListener('mouseover', () => {
        info.children[0].children[1].style.bottom = '0'
    })
});
videoTutorialsList.forEach(info => {
    info.addEventListener('mouseout', () => {
        info.children[0].children[1].style.bottom = '-80px'
    })
});

