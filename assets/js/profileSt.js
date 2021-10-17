let myInfo = document.querySelector('.my-info');
let myInfoList = document.querySelector('.my-info-list');

myInfo.addEventListener('click', () => {
    myInfoList.classList.toggle('flexBox');
    myInfo.children[3].classList.toggle('rotateBox')
});