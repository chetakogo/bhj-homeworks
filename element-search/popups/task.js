
let modalWindow = document.querySelector('#modal_main');
let closeWindow = Array.from(document.querySelectorAll('.modal__close'));
let success = document.querySelector("#modal_success");
let button = document.querySelector(".show-success");

window.onload = () => {modalWindow.classList.add('modal_active')}

closeWindow[0].onclick = function() {
        modalWindow.classList.remove('modal_active')
    }

closeWindow[2].onclick = function() {
    modalWindow.classList.remove('modal_active')
    success.classList.remove('modal_active')
}
button.onclick = function () {
    success.classList.add('modal_active')
};