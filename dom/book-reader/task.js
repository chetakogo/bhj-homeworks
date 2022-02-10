let button = Array.from(document.querySelectorAll('.font-size'));
let small = document.querySelector('.font-size_small')
let big = document.querySelector('.font-size_big')
let book = document.querySelector('.book')

// button.forEach((element) => {
//     element.addEventListener('click', (el) => {
//         let x =  el.findIndex( (elem) => {
//             return elem.classList.contains('font-size_active')
//         })
//         if (x) {
//             element.classList.remove('font-size_active')
//         } else {
//             element.classList.add('font-size_active');
//             el.preventDefault();
//         }
//     })
//
// })

function change () {
    let x =  button.findIndex( (elem) => {
        return elem.classList.contains('font-size_active')
    })
    button[x].classList.remove('font-size_active')
    button.classList.toggle('font-size_active')

}

small.addEventListener('click', (elem) => {
    small.classList.add('font-size_active')
    book.classList.add('book_fs-small')
    elem.preventDefault()
    change()



})

big.addEventListener('click', (elem) => {
    big.classList.add('font-size_active')
    book.classList.add('book_fs-big')
    elem.preventDefault()
    change()



})