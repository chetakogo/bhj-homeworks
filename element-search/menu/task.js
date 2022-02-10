let link = Array.from(document.querySelectorAll('.menu__link'));

    for (let i = 0; i < link.length; i++) {
        let x = link[i].parentElement.querySelector('.menu_sub')
        console.log(x)
        if (x !== null) {
            link[i].addEventListener('click', (event) => {
                x.classList.toggle('menu_active');
                event.preventDefault()
            }, false)
        }
}



