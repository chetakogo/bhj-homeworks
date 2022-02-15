let elements = Array.from(document.querySelectorAll('.interest__check'))

    elements[0].addEventListener('change', () => {
    if (elements[0].checked) {
        elements[1].checked = true;
        elements[2].checked = true;
    } else {
        elements[1].checked = false;
        elements[2].checked = false;
    }
})

elements[3].addEventListener('change', () => {
    if (elements[3].checked) {
        elements[4].checked = true;
        elements[5].checked = true;
    } else {
        elements[4].checked = false;
        elements[5].checked = false;
    }
})