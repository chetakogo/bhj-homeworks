let allAds = document.querySelectorAll('.rotator__case');
let current = 0;

function change () {
    let currentAds  =  Array.from(allAds).findIndex( (elem) => {
        return elem.classList.contains('rotator__case_active')
    })
    allAds[currentAds].classList.remove('rotator__case_active')
    allAds[current].classList.add('rotator__case_active')

    current +1 == allAds.length ? current = 0 : current++
}

 setInterval(change, 1000)