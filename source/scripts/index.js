/* в этот файл добавляет скрипты*/
const buttonNavigationMenu = document.querySelector('.header__toggle');
const navigationMenu = document.querySelector('.navigation');

navigationMenu.classList.remove('navigation--nojs');

buttonNavigationMenu.addEventListener('click', () => {
  if (navigationMenu.classList.contains('navigation--closed')) {
    navigationMenu.classList.remove('navigation--closed');
    navigationMenu.classList.add('navigation--opened');
  } else {
    navigationMenu.classList.remove('navigation--opened');
    navigationMenu.classList.add('navigation--closed');
  }
});
