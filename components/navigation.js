function switchNavigationItem() {
  const elementsNavigationList = document.querySelector('.navigation__list');
  elementsNavigationList.addEventListener ('click', ({target}) => {
    if (target.className === 'navigation__link') {
      elementsNavigationList.querySelectorAll('.navigation__item').forEach(el => el.classList.remove('active-nav'));
      target.parentElement.classList.add('active-nav');
    }
  });
}

function switchNavigationItemOnScroll () {
  const HOME = 599;
  const PORTFOLIO = 1100;
  const elementsNavigationList = document.querySelector('.navigation__list');
  window.addEventListener('scroll', () => {
    const navigationItemsArry = elementsNavigationList.querySelectorAll('.navigation__item');
    if (pageYOffset <= HOME) {
      navigationItemsArry.forEach(el => el.classList.remove('active-nav'));
      navigationItemsArry[0].classList.add('active-nav');
    } else
    if (pageYOffset > HOME & pageYOffset <= PORTFOLIO) {
      navigationItemsArry.forEach(el => el.classList.remove('active-nav'));
      navigationItemsArry[1].classList.add('active-nav');
    } else 
    if (pageYOffset > PORTFOLIO) {
      navigationItemsArry.forEach(el => el.classList.remove('active-nav'));
      navigationItemsArry[2].classList.add('active-nav');
    }
  });
}

export {switchNavigationItem, switchNavigationItemOnScroll};