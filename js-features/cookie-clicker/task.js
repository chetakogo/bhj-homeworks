const img = document.getElementById('cookie');
let clickCounter = document.getElementById('clicker__counter');
     clickCounter.textContent = Number(clickCounter.textContent)
        img.onclick = () => {
            clickCounter.textContent++
            if (clickCounter.textContent % 2!== 0)  {
            img.width += 30
            img.height += 30
        }
     else {
            img.width -= 30
            img.height -= 30
        }
}
