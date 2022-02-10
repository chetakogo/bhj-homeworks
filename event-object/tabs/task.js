let description = Array.from(document.querySelectorAll('.tab__content'))
let tittle = Array.from(document.querySelectorAll('.tab'))
console.log(description)
console.log(tittle)



for (let el of tittle) {

    el.addEventListener('click', () => {
        let index = tittle.indexOf(document.querySelector('.tab_active'))
        console.log(index)
        tittle[index].classList.remove('tab_active')
        //description[index].classList.remove('tab__content_active')
        el.classList.add('tab_active')
        description[index].classList.add('tab__content_active')
    })
}