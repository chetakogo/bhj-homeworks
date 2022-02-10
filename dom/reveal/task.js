let block = Array.from(document.querySelectorAll('.reveal'));

function isVisible(element) {
block.forEach((el) => {
    const {top, bottom} = el.getBoundingClientRect();
    if (bottom < 0 || top > window.innerHeight) {
        return false
    }
    el.classList.add('reveal_active')
    return true
})
}

isVisible(block)
