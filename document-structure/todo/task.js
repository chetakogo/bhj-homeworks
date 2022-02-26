let input = document.querySelector('.tasks__input');
let list = document.getElementById('tasks__list');

let button = document.querySelector('.tasks__add')


button.addEventListener('click', (event) => {
    event.preventDefault()
    create()
    input.value = ''
})




document.addEventListener('keydown', (e) => {



    if (input.value.trim().length !== 0 && e.key === 'Enter') {

        console.log(input.value)
        e.preventDefault()
        create()
        input.value = ''
    }
})





function create() {
    list.insertAdjacentHTML('beforeend', '<div class="task"><div class="task__title"></div><a href="#" class="task__remove">&times;</a></div>')
    let task = list.lastChild
    let tasks = task.firstChild
    tasks.insertAdjacentHTML("afterbegin", input.value)


    let rem = document.querySelectorAll('.task__remove')
    console.log(rem)

    for (let elem of rem) {

        elem.addEventListener('click', (event) => {
            event.preventDefault()
            event.target.closest('.task').remove()
        })
    }
}





