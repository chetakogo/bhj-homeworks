const editor = document.querySelector('#editor');

if (localStorage.getItem('editor') !== null) {
    editor.value = localStorage.getItem('editor');
}

document.addEventListener('keydown', function (e) {
    localStorage.setItem('editor', editor.value);
});
