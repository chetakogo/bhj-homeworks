
let modalWindow = document.querySelector('#subscribe-modal');
let closeWindow = document.querySelector('.modal__close');


function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}

function getCookie (name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find((p) => p.startsWith(name + '='))
    return cookie.substr(name.length + 1)
}


window.onload = () => {modalWindow.classList.add('modal_active')}


    closeWindow.addEventListener('click', (e) => {
        e.preventDefault()
        modalWindow.classList.remove('modal_active')
        setCookie('closed', 'yes')
    })


window.addEventListener('load', () => {
    if (getCookie('closed')) {
        modalWindow.classList.remove('modal_active')
    }
})