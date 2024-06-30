document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    console.log('Username:', username);
    console.log('Password:', password);

    alert('Form submitted');
});