function switchSliders() {
  const buttonSliderControllers = document.querySelector('.slider__arrows-controllers');
  const slider = document.querySelector('.slider');
  const sliderItems = Array.prototype.slice.call(document.querySelectorAll('.slider__item'));
  buttonSliderControllers.addEventListener('click', () => {
    slider.classList.toggle('slider--color');
    sliderItems.forEach(el => el.classList.toggle('slider__item--transform'));
});
}
export {switchSliders};