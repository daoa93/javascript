const btnCall = document.querySelector(".btnCall");
const btnClose = document.querySelector('.btnClose');
const mobileMenu = document.querySelector('.mobileMenu');

btnCall.addEventListener('click', () => {
  mobileMenu.classList.add('on');
});

btnClose.addEventListener('click', () => {
  mobileMenu.classList.remove('on');
});