let dropdown = document.querySelector('.dropdown')
let list = document.querySelector('.dropdown__list')
let item = document.querySelectorAll('.dropdown__item')
let itemArray = Array.from(item)
let value = document.querySelector('.dropdown__value')
let link = Array.from(document.querySelectorAll('.dropdown__link'))


dropdown.addEventListener('click',openList )

function openList () {

    if (!list.classList.contains('dropdown__list_active')) {
        list.classList.add('dropdown__list_active')

    }
    else {
        list.classList.remove('dropdown__list_active')
    }
}

link.forEach( (elem) => {
    elem.addEventListener('click', (event) => {
        event.preventDefault();

    })
})

itemArray.forEach( (elem) => {
let z = elem.textContent
elem.addEventListener('click', (checkItem) => {
    value.innerHTML = z
})
})



