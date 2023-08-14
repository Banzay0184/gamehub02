class Chat {
    handlerOpenChat() {
        const topPage = document.querySelector('#top')
        topPage.classList.add('hide')
        const searchPages = document.querySelector('#search')
        searchPages.classList.add('hide')
        const chat = document.querySelector('#chat')
        chat.classList.remove('hide')
        const gameInfoPage = document.querySelector('#gameInfo')
        gameInfoPage.classList.add('hide')
        const menu = document.querySelector('.menu')
        menu.classList.add('hide')
        const myGamePage = document.querySelector('#myGame')
        myGamePage.classList.add('hide')
    }

    render() {
        const html = `
            <div class="container">
            
                <div class="person-selector">
                <a style="width: 40%;" href="./index.html">
                    <img src="img/back-square-svgrepo-com.svg" alt="">
                </a>
      <button class="button person-selector-button active-person" id="john-selector">John</button>
      <button class="button person-selector-button" id="jane-selector">Jane</button>
    </div>
    <div class="chat-container">
        <div class="chat-box">
            <h2 class="chat-header">John chatting...</h2>
            <button class="clear-chat-button">Clear Chat</button>
        </div>
      <div class="chat-messages">
<!--        <div class="message blue-bg">-->
<!--          <div class="message-sender"></div>-->
<!--          <div class="message-text"></div>-->
<!--          <div class="message-timestamp"></div>-->
<!--        </div>-->
<!--        <div class="message gray-bg">-->
<!--          <div class="message-sender"></div>-->
<!--          <div class="message-text"></div>-->
<!--          <div class="message-timestamp"></div>-->
<!--        </div>-->
      </div>

      <form class="chat-input-form">
        <input type="text" class="chat-input" required placeholder="Type here, John..." />
        <button type="submit" class="button send-button">Send</button>
      </form>
    </div>
            </div>
        `;
        ROOT_CHAT.innerHTML = html
    }
}

const chatPage = new Chat()
chatPage.render()


// @ts-nocheck

const johnSelectorBtn = document.querySelector('#john-selector')
const janeSelectorBtn = document.querySelector('#jane-selector')
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChatBtn = document.querySelector('.clear-chat-button')

const messages = JSON.parse(localStorage.getItem('messages')) || []

const createChatMessageElement = (message) => `
  <div class="message ${message.sender === 'John' ? 'blue-bg' : 'gray-bg'}">
    <div class="message-sender">${message.sender}</div>
    <div class="message-text">${message.text}</div>
    <div class="message-timestamp">${message.timestamp}</div>
  </div>
`

window.onload = () => {
    messages.forEach((message) => {
        chatMessages.innerHTML += createChatMessageElement(message)
    })
}

let messageSender = 'John'

const updateMessageSender = (name) => {
    messageSender = name
    chatHeader.innerText = `${messageSender} chatting...`
    chatInput.placeholder = `Type here, ${messageSender}...`

    if (name === 'John') {
        johnSelectorBtn.classList.add('active-person')
        janeSelectorBtn.classList.remove('active-person')
    }
    if (name === 'Jane') {
        janeSelectorBtn.classList.add('active-person')
        johnSelectorBtn.classList.remove('active-person')
    }

    /* auto-focus the input field */
    chatInput.focus()
}

johnSelectorBtn.onclick = () => updateMessageSender('John')
janeSelectorBtn.onclick = () => updateMessageSender('Jane')

const sendMessage = (e) => {
    e.preventDefault()

    const timestamp = new Date().toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
    const message = {
        sender: messageSender,
        text: chatInput.value,
        timestamp,
    }

    /* Save message to local storage */
    messages.push(message)
    localStorage.setItem('messages', JSON.stringify(messages))

    /* Add message to DOM */
    chatMessages.innerHTML += createChatMessageElement(message)

    /* Clear input field */
    chatInputForm.reset()

    /*  Scroll to bottom of chat messages */
    chatMessages.scrollTop = chatMessages.scrollHeight
}

chatInputForm.addEventListener('submit', sendMessage)

clearChatBtn.addEventListener('click', () => {
    localStorage.clear()
    chatMessages.innerHTML = ''
})