const xhr = new XMLHttpRequest;
const loader = document.querySelector('#loader')
const item = document.querySelector('#items')

xhr.open( 'GET', 'https://netology-slow-rest.herokuapp.com' );
xhr.send()



xhr.addEventListener('load', () => {
    if (xhr.readyState === xhr.DONE && xhr.status == 200) {
        loader.classList.remove('loader_active');
        let formatedData = JSON.parse(xhr.responseText)

        for (let i in formatedData.response.Valute) {
        //     item.insertAdjacentHTML("beforebegin", `
        // <div class="item__code">${formatedData.response.Valute[i].CharCode}</div>
        // <div class="item__value">${formatedData.response.Valute[i].Value}</div>
        // <div class="item__currency">руб.</div>`)
            const code = document.createElement('div')
            code.classList.add('item__code');
            code.textContent = formatedData.response.Valute[i].CharCode

            const itemValue = document.createElement('div')
            itemValue.classList.add('item__value');
            itemValue.textContent = formatedData.response.Valute[i].Value

            const itemCurrency = document.createElement('div')
            itemCurrency.classList.add('item__value');
            itemCurrency.textContent = 'руб.'

            item.append(code)
            item.append(itemValue)
            item.append(itemCurrency)
        }

    }

})
