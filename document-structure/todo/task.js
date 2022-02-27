let input = document.querySelector('.tasks__input');
let list = document.getElementById('tasks__list');

let button = document.querySelector('.tasks__add')


button.addEventListener('click', (event) => {
    event.preventDefault()
    if (input.value.trim().length !== 0) {
        create()
        input.value = ''
    }
})

document.addEventListener('keyup', (event) => {

    if (input.value.trim().length !== 0 && event.key === 'Enter') {

        console.log(input.value)
        event.preventDefault()
        create()
        input.value = ''
    }
})


function create() {
    list.insertAdjacentHTML('beforeend', `
<div class="task">
    <div class="task__title">${input.value.trim()}</div>
    <a href="#" class="task__remove">&times;</a>
</div>`)


    let rem = document.querySelectorAll('.task__remove')

let last = rem[rem.length-1]

        last.addEventListener('click', (event) => {
            event.preventDefault()
            event.target.closest('.task').remove()
        })

}





