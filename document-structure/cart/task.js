let plus = Array.from(document.querySelectorAll('.product__quantity-control_inc'))
let minus = Array.from(document.querySelectorAll('.product__quantity-control_dec'))
let quantity = document.querySelectorAll('.product__quantity-value')
let basket = Array.from(document.querySelectorAll('.product__add'))
let baskets = document.querySelector('.cart__products')
let product = document.querySelectorAll('.product')
let productImage = document.querySelectorAll('.product__image')


for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', (el) => {
        let index = plus.indexOf(event.target)
        let x = Number(quantity[index].textContent)
        x++
        x  = String(x)
        quantity[index].textContent = x
    })
}

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', (el) => {
        let index = minus.indexOf(event.target)
        let x = Number(quantity[index].textContent)
        x--
        if ( x >= 1) {
            x = String(x)
            quantity[index].textContent = x
        } else {
            quantity[index].textContent = '1'
        }
    })
}

for (let el of basket) {
    el.addEventListener('click', () => {
baskets.insertAdjacentHTML('beforeend', '<div class="cart__product" data-id=""><img class="cart__product-image" ><div class="cart__product-count"></div></div>')
        let index = basket.indexOf(event.target)
        let id = product[index].getAttribute('data-id')
        console.log(id)
        let cart = document.querySelectorAll('.cart__product')
        cart[index].setAttribute('data-id', id)
        let img = productImage[index].getAttribute('src')
        let cartImg = document.querySelectorAll('.cart__product-image')
        cartImg[index].setAttribute('src', img)
    })
}