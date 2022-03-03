const welcome = document.querySelector('#welcome')
const userId = document.querySelector('#user_id')
const signin = document.querySelector('#signin')

    document.getElementById('signin__form').addEventListener('submit', (e) => {
        e.preventDefault();
        const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {
        let formatedData = JSON.parse(xhr.responseText);

        if (xhr.readyState === xhr.DONE && xhr.status == 200) {
            if (formatedData.success === true) {
                localStorage.setItem('id', JSON.stringify(formatedData.user_id));
                let id = localStorage.getItem('id')
                signin.classList.remove('signin_active')
                welcome.classList.add('welcome_active')
                userId.textContent = formatedData.user_id
                if (id == formatedData.user_id) {
                    signin.classList.remove('signin_active')
                    welcome.classList.add('welcome_active')
                    userId.textContent = id
                }
            } else {
                welcome.classList.add('welcome_active');
                welcome.textContent = 'Неверный логин/пароль'
            }
        }
    })

        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php')
        const formData = new FormData(document.getElementById('signin__form'))
        xhr.send(formData)
    })

