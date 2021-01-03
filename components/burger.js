function openBurgerMenu() {
  const burgerButton = document.querySelector('.burger');
  burgerButton.addEventListener('click', () => {
  burgerButton.querySelector('.burger__list').classList.toggle('burger__list--show');
  });
}

export {openBurgerMenu};