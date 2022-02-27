const xhr = new XMLHttpRequest;
let poll = document.querySelector('.poll');
let pollTitle = document.querySelector('#poll__title');
let pollAnswers = document.querySelector('#poll__answers')

xhr.open( 'GET', 'https://netology-slow-rest.herokuapp.com/poll.php' );
xhr.send()

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let formatedData = JSON.parse(xhr.responseText);
        console.log(formatedData)
        pollTitle.textContent = formatedData.data.title
        for (let i in formatedData.data.answers) {
            pollAnswers.insertAdjacentHTML("afterbegin",
                `<button class="poll__answer">${formatedData.data.answers[i]}</button>`)
        }
        let button = document.querySelectorAll('.poll__answer')
        for (let elem of button) {
            elem.addEventListener('click', (event) => {
                alert("Спасибо, Ваш голос засчитан")
            })
        }
    }
})

