let chat = document.querySelector('.chat-widget');
let input = document.getElementById('chat-widget__input')
const messages = document.querySelector( '.chat-widget__messages' );

let time = new Date();
let currentTime = time.toLocaleTimeString().slice(0,5);


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
        // messageTime.innerHTML += '';
        // messageText.innerHTML += '';
       bot()
    }
})
function human () {
    messages.innerHTML += `
          <div class="message message_client">
            <div class="message__time"> </div>
            <div class="message__text"> </div>
          </div>
        `;
    let messageTime = document.querySelector('.message__time');
    let messageText = document.querySelector('.message__text');
    messageTime.innerHTML += currentTime;
    messageText.innerHTML += input.value;

}
function bot () {
    messages.innerHTML += `
    <div class="message">
        <div class="message__time"> </div>
        <div class="message__text"> </div>
    </div>
    `;
    let messageTime = document.querySelector('.message__time');
    let messageText = Array.from(document.querySelectorAll('.message__text'));
    let randomMessage = Math.floor(Math.random()* messageText.length)
    messageTime.innerHTML += currentTime;
    messageText.innerHTML += messageText[randomMessage]
}