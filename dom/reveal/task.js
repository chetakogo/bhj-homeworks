let block = Array.from(document.querySelectorAll('.reveal'));


window.addEventListener('scroll', () => {
    block.forEach((el) => {
        const {top, bottom} = el.getBoundingClientRect();
        if (bottom < 0 || top > window.innerHeight) {
            return false
        }
        el.classList.add('reveal_active')
        return true
    })
} )