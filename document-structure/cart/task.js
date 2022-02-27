let plus = Array.from(document.querySelectorAll('.product__quantity-control_inc'))
let minus = Array.from(document.querySelectorAll('.product__quantity-control_dec'))
let quantity = document.querySelectorAll('.product__quantity-value')
let button = Array.from(document.querySelectorAll('.product__add'))
let baskets = document.querySelector('.cart__products')



for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', (el) => {
        let index = plus.indexOf(event.target)
        let currentQuantity = Number(quantity[index].textContent)
        currentQuantity++
        currentQuantity  = String(currentQuantity)
        quantity[index].textContent = currentQuantity
    })
}

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', (el) => {
        let index = minus.indexOf(event.target)
        let currentQuantity = Number(quantity[index].textContent)
        currentQuantity--
        if ( currentQuantity >= 1) {
            currentQuantity = String(currentQuantity)
            quantity[index].textContent = currentQuantity
        } else {
            quantity[index].textContent = '1'
        }
    })
}

for (let el of button) {
    el.addEventListener('click', (event) => {
        let product = event.target.closest('.product');
        let productImage = product.querySelector('.product__image')
        let currentQuantity = product.querySelector('.product__quantity-value')

        let arrayOfCarts = Array.from(baskets.children).find(
            (item) => item.dataset.id === product.dataset.id

        );
        //console.log(item)
        if (arrayOfCarts) {
            let productQuantityElement = product.querySelector(
                '.product__quantity-value'
            );
            let productQuantity = Number(productQuantityElement.textContent.trim());

            let itemCartQuantityElement = arrayOfCarts.querySelector('.cart__product-count');
            let itemCartQuantity = Number(itemCartQuantityElement.textContent.trim());

            itemCartQuantityElement.textContent = itemCartQuantity + productQuantity;

        } else {

            baskets.insertAdjacentHTML('beforeend', `
<div class="cart__product" data-id="${product.dataset.id}">
<img class="cart__product-image" src="${productImage.src}" >
<div class="cart__product-count">${Number(currentQuantity.textContent)}</div>
</div>`)


        }



    })
}