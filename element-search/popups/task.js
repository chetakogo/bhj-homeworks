
let modalWindow = document.querySelector('#modal_main');
let closeWindow = Array.from(document.querySelectorAll('.modal__close'));
let success = document.querySelector("#modal_success");
let button = document.querySelector(".show-success");

window.onload = () => {modalWindow.classList.add('modal_active')}

for (let i = 0; i < closeWindow.length; i++) {
    closeWindow[i].onclick = function () {
        let x = closeWindow[i].closest('.modal_active' )
        x.classList.remove('modal_active')
    }
}

button.onclick = function () {
    modalWindow.classList.remove('modal_active')    
    success.classList.add('modal_active')
};