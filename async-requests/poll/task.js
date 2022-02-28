const xhr = new XMLHttpRequest;
const poll = document.querySelector('.poll');
const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers')

xhr.open( 'GET', 'https://netology-slow-rest.herokuapp.com/poll.php' );
xhr.send()

xhr.addEventListener('load', () => {
    if (xhr.readyState === xhr.DONE && xhr.status == 200 ) {
        let formatedData = JSON.parse(xhr.responseText);
        console.log(formatedData)
        pollTitle.textContent = formatedData.data.title
        for (let i in formatedData.data.answers) {
            // pollAnswers.insertAdjacentHTML("afterbegin",
            //     `<button class="poll__answer">${formatedData.data.answers[i]}</button>`)
            const pollAnswer = document.createElement('button')
            pollAnswer.classList.add('poll__answer');
            pollAnswer.textContent = formatedData.data.answers[i];
            pollAnswers.append(pollAnswer)
        }
        const button = document.querySelectorAll('.poll__answer')
        for (let elem of button) {
            elem.addEventListener('click', (event) => {
                alert("Спасибо, Ваш голос засчитан")
            })
        }
    }
})

