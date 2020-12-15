const elementsNavigationList = document.querySelector('.navigation__list');
const buttonSliderControllers = document.querySelector('.slider__arrows-controllers');
const elementsPortfolioTabs = document.querySelector('.portfolio__tabs');
const portfolioListItems = document.querySelectorAll('.portfolio__item');
const portfolioList = document.querySelector('.portfolio__list');

function switchNavigationItem() {
  elementsNavigationList.addEventListener ('click', (event)=> {
    if (event.target.tagName === 'A'){
      elementsNavigationList.querySelectorAll('.navigation__item').forEach(el => el.classList.remove('active-nav'));
      event.target.parentElement.classList.add('active-nav');
    }
  });

};
switchNavigationItem();

function switchSliders() {
buttonSliderControllers.addEventListener('click', (event) => {
  const sladerImage = document.querySelector('.slider__slide-1');
  const sliderBackgroundColor = document.querySelector('.slider');
  sladerImage.classList.toggle('slider__slide-1--hidden');
  sliderBackgroundColor.classList.toggle('slider--color');
});
};
switchSliders();

function switchNavigationItemOnScroll () {
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
};
switchNavigationItemOnScroll();

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

elementsPortfolioTabs.addEventListener('click', (event)=> {
  const portfolioItemsArry = Array.prototype.slice.call(portfolioListItems);
  const portfolioItemsArryRandom = shuffle(portfolioItemsArry);
  if (event.target.tagName === 'BUTTON') {
   function changePortfolioImages () {
      for (let i = 0; i <= portfolioItemsArry.length; i++) {
        portfolioItemsArry[i].remove();
        portfolioList.append(portfolioItemsArryRandom[i]);
      };
    };
  }
  changePortfolioImages();
});
