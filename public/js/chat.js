// Chatサーバに接続
const URL = "";
const socket = io.connect(URL); 

function sendMessage() {
    // console.log('send message!!')
    var message = document.getElementById('message').value;
    console.log(message);
    if (message) {
        var data = {
            message:message
        }
        socket.emit('chat_message',data);
        
    }
}

