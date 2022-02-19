let hasTooltip =  document.querySelectorAll('.has-tooltip');

for (let elem of hasTooltip) {


    elem.addEventListener('click', (el) => {
        let x = elem.getAttribute('title')
        elem.removeAttribute('title')
        console.log(x)
        el.preventDefault();
        elem.insertAdjacentHTML('afterend', '<div class="tooltip"></div>')
        let y = document.querySelector('.tooltip')
        y.insertAdjacentHTML('afterbegin', x)
        y.classList.toggle('tooltip_active')

    })


}

