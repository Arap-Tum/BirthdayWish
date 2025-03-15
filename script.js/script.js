
const btn = document.querySelector('.send-your-wishes');


const sendersName = document.querySelector('.name');
const message = document. querySelector('.message');

function sendTheWishes() { 

    const nameOfTheSender = sendersName.value;
    const messageFromTheSender = message.value;

    const mailingMessage =
    ` Hello sir \n ${nameOfTheSender} Wishes you a happy birthday,\n
    Message \n   ${messageFromTheSender}`; 

    

    console.log(mailingMessage)
};


btn.addEventListener('click', sendTheWishes);


