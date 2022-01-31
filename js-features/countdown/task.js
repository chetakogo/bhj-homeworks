
const countdown = document.getElementById('timer');
const countdownTimer = setInterval( () => {countdown.textContent = Number(countdown.textContent) - 1;
if (countdown.textContent === '-1') {
    alert('Вы победили в конкурсе!')
    countdown.textContent = 0
    clearInterval(countdownTimer)
}}, 1000);

