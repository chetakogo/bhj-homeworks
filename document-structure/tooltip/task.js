let hasTooltip =  document.querySelectorAll('.has-tooltip');

let tooltip = document.createElement('div')
tooltip.classList.add('tooltip')
hasTooltip[0].after(tooltip)


for (let elem of hasTooltip) {


    elem.addEventListener('click', (event) => {
        event.preventDefault();

        if (event.target.title === tooltip.textContent ) {
            tooltip.classList.toggle('tooltip_active')
        } else {
            tooltip.textContent = event.target.title
            tooltip.classList.add('tooltip_active')
        }

        tooltip.style.top = event.target.getBoundingClientRect().top + 22 + 'px';
        tooltip.style.left = event.target.getBoundingClientRect().left + 0 + 'px';
        tooltip.style.cursor = 'pointer';



    })

}


