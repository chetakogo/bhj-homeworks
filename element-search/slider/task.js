let slides = document.querySelectorAll('.slider__item')
let prev = document.querySelector('.slider__arrow_prev');
let next = document.querySelector('.slider__arrow_next');
let current = 0;

function slide () {
    for (let i = 0; i < slides.length; i++) {
         slides[i].classList.remove('slider__item_active');
    }
    slides[current].classList.add('slider__item_active')
}
prev.addEventListener('click', () => {
    if (current -1 == -1) {
        current = slides.length - 1;
    } else {
        current--
    }
    slide(current)
})

next.addEventListener('click', () => {

    if (current +1 == slides.length) {
        current = 0;

    } else {
        current++
    }
    console.log(current)
    slide(current)
})

