const elementsNavigationList = document.querySelector('.navigation__list');
const buttonSliderControllers = document.querySelector('.slider__arrows-controllers');

function switchNavigationItem() {
  elementsNavigationList.addEventListener ('click', (event)=> {
    if (event.target.tagName === 'A'){
      elementsNavigationList.querySelectorAll('.navigation__item').forEach(el => el.classList.remove('active-nav'));
      event.target.parentElement.classList.add('active-nav');
    }
  });

};
switchNavigationItem()

function switchSliders() {
buttonSliderControllers.addEventListener('click', (event) => {
  const sladerImage = document.querySelector('.slider__slide-1');
  const sliderBackgroundColor = document.querySelector('.slider');
  sladerImage.classList.toggle('slider__slide-1--hidden');
  sliderBackgroundColor.classList.toggle('slider--color');
});
};
switchSliders()

window.addEventListener('scroll', (event) => {
  const navigationItemsArry = elementsNavigationList.querySelectorAll('.navigation__item');
  if (pageYOffset <=599) {
    navigationItemsArry.forEach(el => el.classList.remove('active-nav'));
    navigationItemsArry[0].classList.add('active-nav');
  } else
  if (pageYOffset >= 600 & pageYOffset <= 1100) {
    navigationItemsArry.forEach(el => el.classList.remove('active-nav'));
    navigationItemsArry[1].classList.add('active-nav');
  } else 
  if (pageYOffset >=1101) {
    navigationItemsArry.forEach(el => el.classList.remove('active-nav'));
    navigationItemsArry[2].classList.add('active-nav');
  }
});