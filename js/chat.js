const openChat = document.getElementById('openChat')
const chat = document.getElementById('chat')
const usertoken = localStorage.getItem('userToken');
openChat.onclick = () => {
    chat.classList.toggle('none')
    console.log(usertoken)
}