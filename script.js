
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message, we will get back to you shortly.');
    document.getElementById('contact-form').reset();
});
