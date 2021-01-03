function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
};

function shufflePortfolioImages() {
  const portfolioList = document.querySelector('.portfolio__list');
  const portfolioListItems = document.querySelectorAll('.portfolio__item');
  const elementsPortfolioTabs = document.querySelector('.portfolio__tabs');
  elementsPortfolioTabs.addEventListener('click', ({target}) => {
    const portfolioItemsArryRandom = shuffle(Array.prototype.slice.call(portfolioListItems));
    if (target.tagName === 'BUTTON') {
      portfolioListItems.forEach(el => el.remove());
      portfolioItemsArryRandom.forEach(el => portfolioList.appendChild(el));
    }
  });
}

export {shufflePortfolioImages};