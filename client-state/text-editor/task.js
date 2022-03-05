const editor = document.querySelector('#editor');


editor.value = localStorage.getItem('editor');


document.addEventListener('keydown', function (e) {
    localStorage.setItem('editor', editor.value);
});
