let link = Array.from(document.querySelectorAll('.menu__link'));
// let itemMenu = Array.from(document.querySelectorAll('.menu__item'));
// let subMenu = document.querySelectorAll('.menu_sub')

    for (let i = 0; i < link.length; i++) {
        let x = link[i].parentElement.querySelector('.menu_sub')
        console.log(x)
        if (x !== null) {
            link[i].addEventListener('click', () => {
                x.classList.add('menu_active');
            }, false)
        }
}



