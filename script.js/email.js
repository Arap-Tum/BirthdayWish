  const btn = document.querySelector('.send-your-wishes');
  const form = document.getElementById('form');
  const sendersName = document.querySelector('.name');
  const message = document.querySelector('.message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    btn.value = 'Sending...';

    // Compose custom message format
    const nameOfTheSender = sendersName.value;
    const messageFromTheSender = message.value;

    const mailingMessage =
      `Hello sir,\n\n${nameOfTheSender} wishes you a happy birthday!\n\nMessage:\n${messageFromTheSender}`;

    // Optionally put the formatted message into a hidden input if your template expects {{message}}
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 'formatted_message';
    hiddenInput.value = mailingMessage;
    form.appendChild(hiddenInput); // Include it in the form sent

    // Send using EmailJS
    emailjs.sendForm('default_service', 'template_2al3rx3', form)
      .then(() => {
        btn.value = 'Send Wish';
        alert('Your birthday message was sent successfully!');
        form.reset(); // Clear the form after sending
      }, (err) => {
        btn.value = 'Send Wish';
        alert('Failed to send message. Please try again.');
        console.error('EmailJS Error:', err);
      });

      nameOfTheSender = "";
      messageFromTheSender = "";
  });

