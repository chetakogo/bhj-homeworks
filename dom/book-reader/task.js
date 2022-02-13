let button = Array.from(document.querySelectorAll('.font-size'));
let content = document.querySelector('.book__content')

button.forEach((element) => {

    element.addEventListener('click', (el) => {
        let current = document.querySelector('.font-size_active')
        el.preventDefault()
        current.classList.remove('font-size_active')
        element.classList.add('font-size_active')
let x = element.getAttribute('data-size')
        console.log( x)
        if (x === 'small') {
            content.classList.add('book_fs-small')
            content.classList.remove('book_fs-big')
        } else if (x === 'big') {
            content.classList.add('book_fs-big')
            content.classList.remove('book_fs-small')
        } else {
            content.classList.remove('book_fs-small')
            content.classList.remove('book_fs-big')
        }
    })

})
