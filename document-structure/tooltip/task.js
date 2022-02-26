let hasTooltip =  document.querySelectorAll('.has-tooltip');

for (let elem of hasTooltip) {


    elem.addEventListener('click', (event) => {
        event.preventDefault();

        event.target.innerHTML += `
            <div class="tooltip"></div>
        `;

        let tooltip = document.querySelector('.tooltip');

        tooltip.classList.toggle('tooltip_active')
        tooltip.textContent = event.target.title;
        tooltip.style.top = event.target.getBoundingClientRect().top + 22 + 'px';
        tooltip.style.left = event.target.getBoundingClientRect().left + 0 + 'px';
        tooltip.style.cursor = 'pointer';


    })


}

