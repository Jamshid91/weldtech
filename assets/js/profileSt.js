let myInfo = document.querySelector('.my-info');
let myInfoList = document.querySelector('.my-info-list');

myInfo.addEventListener('click', () => {
    myInfo.classList.toggle('borderMyInfo')
    myInfoList.classList.toggle('flexBox');
    myInfo.children[1].children[1].classList.toggle('showArrow');
});