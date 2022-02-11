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
        }
        if (x === 'big') {
            content.classList.add('book_fs-big')
        }
    })

})

// function change () {
//     let x =  button.findIndex( (elem) => {
//         return elem.classList.contains('font-size_active')
//     })
//     button[x].classList.remove('font-size_active')
//     button.classList.toggle('font-size_active')
//
// }
//
// small.addEventListener('click', (elem) => {
//     small.classList.add('font-size_active')
//     book.classList.add('book_fs-small')
//     elem.preventDefault()
//     change()
//
//
//
// })
//
// big.addEventListener('click', (elem) => {
//     big.classList.add('font-size_active')
//     book.classList.add('book_fs-big')
//     elem.preventDefault()
//     change()
//
//
//
// })