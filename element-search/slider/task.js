let slides = document.querySelectorAll('.slider__item')
let prev = document.querySelector('.slider__arrow_prev');
let next = document.querySelector('.slider__arrow_next');
let current = 0;


function slide () {
  let x =  Array.from(slides).findIndex( (elem) => {
        return elem.classList.contains('slider__item_active')
    })
    slides[x].classList.remove('slider__item_active')
    slides[current].classList.add('slider__item_active')
}
prev.addEventListener('click', () => {
    current -1 == -1 ? current = slides.length - 1 : current--
    slide(current)
})

next.addEventListener('click', () => {
    current +1 == slides.length ? current = 0 : current++
    slide(current)
})

