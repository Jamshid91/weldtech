let myInfo = document.querySelector('.my__info');
let certificates = document.querySelector('.certificates');
let myInfoItem = document.querySelector('.my-info-item');
let certificatesItem = document.querySelector('.certificates-item');

myInfo.addEventListener('click', () => {
    myInfoItem.style.display = 'block';
    certificatesItem.style.display = 'none';
    certificates.style.borderBottom = '0';
    myInfo.style.borderBottom = '8px solid #26225E';
});

certificates.addEventListener('click', () => {
    myInfoItem.style.display = 'none';
    certificatesItem.style.display = 'block';
    certificates.style.borderBottom = '8px solid #26225E';
    myInfo.style.borderBottom = '0';
});

let myInfoBtn = document.querySelector('.my-info');
let myInfoList = document.querySelector('.my-info-list');

myInfoBtn.addEventListener('click', () => {
    myInfoBtn.classList.toggle('borderMyInfo')
    myInfoList.classList.toggle('flexBox');
    myInfoBtn.children[1].children[1].classList.toggle('showArrow');
});