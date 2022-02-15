let description = Array.from(document.querySelectorAll('.tab__content'))
let tittle = Array.from(document.querySelectorAll('.tab'))
console.log(description)
console.log(tittle)



for (let el of tittle) {
    el.addEventListener('click', (element) => {
        for (el of tittle) {
            el.classList.remove('tab_active')
        }
        for (el of description) {
            el.classList.remove('tab__content_active')
        }
        let index = tittle.indexOf(event.target)
        if (el.index !== index) {
            description[index].classList.add('tab__content_active')
            tittle[index].classList.add('tab_active')
        }
    })
}
