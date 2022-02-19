let input = document.querySelector('.tasks__input');
let list = document.getElementById('tasks__list');
let rem = Array.from(document.querySelectorAll('.task__remove'))



console.log(list)
console.log(input.value)



document.addEventListener('keydown', (e) => {
    if (input.value !== '' && e.key == 'Enter') {
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
}

for (let elem of rem) {
    elem.addEventListener('click', () => {
        let  x = Array.from(document.querySelectorAll('.task'))
        let y = x.indexOf(event.target)
        x[y].remove()
    })
}


