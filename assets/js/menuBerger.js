const menuBurger = document.querySelector('.menu-burger');
const mobileNavInfo = document.querySelector('.mobile-nav-info');
const mobileNavInfoItem = document.querySelector('.mobile-nav-info-item');
const closeMenuBurger = document.querySelector('.close-menuBurger')

menuBurger.addEventListener('click', () => {
    mobileNavInfo.style.display = 'block'
    mobileNavInfoItem.style.left = '0'
});

closeMenuBurger.addEventListener('click', () => {
    mobileNavInfo.style.display = 'none'
    mobileNavInfoItem.style.left = '-250px'
});