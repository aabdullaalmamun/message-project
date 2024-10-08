document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Collect the message from the form
    const messageContent = document.getElementById('message').value;

    // Send the message via EmailJS
    emailjs.send("service_uuneiqk", "template_fp5e37j", {
        message: messageContent
    }).then(function(response) {
        document.getElementById('status').textContent = "Message sent successfully!";
    }, function(error) {
        document.getElementById('status').textContent = "Failed to send message!";
    });

    // Clear the form after submission
    this.reset();
});
