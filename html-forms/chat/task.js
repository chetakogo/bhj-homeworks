let chat = document.querySelector('.chat-widget');
let input = document.getElementById('chat-widget__input')
const messages = document.querySelector( '.chat-widget__messages' );

let time = new Date();
let currentTime = time.toLocaleTimeString().slice(0,5);

let messagesBot = ['Hello', 'good morning', 'good day', 'good evening'];



chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active')
})



 input.addEventListener('keydown', (e) => {
     if (input.value !== '' && e.key == 'Enter') {
        human();
        input.value = '';

     }
 })
input.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
       bot()
    }
})
function human () {
    messages.innerHTML += `
          <div class="message message_client">
            <div class="message__time">${currentTime}</div>
            <div class="message__text">${input.value}</div>
          </div>
        `;

}
function bot () {
    let randomMessage = Math.floor(Math.random()* messagesBot.length)
    messages.innerHTML += `
    <div class="message">
        <div class="message__time">${currentTime}</div>
        <div class="message__text">${messagesBot[randomMessage]}</div>
    </div>
    `;





}