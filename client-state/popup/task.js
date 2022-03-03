
let modalWindow = document.querySelector('#subscribe-modal');
let closeWindow = document.querySelector('.modal__close');


function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}


window.onload = () => {modalWindow.classList.add('modal_active')}


    closeWindow.addEventListener('click', (e) => {
        e.preventDefault()
        modalWindow.classList.remove('modal_active')
        setCookie('closed', 'yes')
        console.log(document.cookie)
    })


console.log(document.cookie)