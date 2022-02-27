const xhr = new XMLHttpRequest;
const loader = document.querySelector('#loader')
let item = document.querySelector('.item')
let items = document.querySelector('#items')

xhr.open( 'GET', 'https://netology-slow-rest.herokuapp.com' );
xhr.send()



xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        let formatedData = JSON.parse(xhr.responseText)
        for (let i in formatedData.response.Valute) {
            item.insertAdjacentHTML("beforebegin", `
        <div class="item__code">${formatedData.response.Valute[i].CharCode}</div>
        <div class="item__value">${formatedData.response.Valute[i].Value}</div>
        <div class="item__currency">руб.</div>`)
        }

    }

})
