const progress = document.getElementById( 'progress' );


document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (event) => {
        progress.value = event.loaded/event.total
    })

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php')
    const formData = new FormData(document.getElementById('form'))
    xhr.send(formData)
})