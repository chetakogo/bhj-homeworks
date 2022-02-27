let hasTooltip =  document.querySelectorAll('.has-tooltip');


for (let elem of hasTooltip) {


    elem.addEventListener('click', (event) => {
        event.preventDefault();

        event.target.innerHTML += `
            <div class="tooltip">${event.target.title}</div>
        `;
        let tooltip = document.querySelector('.tooltip');


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


