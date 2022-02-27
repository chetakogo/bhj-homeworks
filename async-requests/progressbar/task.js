const progress = document.getElementById( 'progress' );


document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (event) => {
        if(event.loaded = 0.1*event.total) {
            progress.value = 0.1
        }
        if (event.loaded = 0.2*event.total) {
            progress.value = 0.2
        }
        if (event.loaded = 0.3*event.total) {
            progress.value = 0.3
        }
        if (event.loaded = 0.4*event.total) {
            progress.value = 0.4
        }
        if (event.loaded = 0.5*event.total) {
            progress.value = 0.5
        }
        if (event.loaded = 0.6*event.total) {
            progress.value = 0.6
        }
        if (event.loaded = 0.7*event.total) {
            progress.value = 0.7
        }
        if (event.loaded = 0.8*event.total) {
            progress.value = 0.8
        }
        if (event.loaded = 0.9*event.total) {
            progress.value = 0.9
        }
        if (event.loaded = event.total) {
            progress.value = 1.0
        }
    })

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php')
    const formData = new FormData(document.getElementById('form'))
    xhr.send(formData)
})