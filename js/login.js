const users = [
    {login: 'Alexei', password: 'qwerty'},
    {login: 'Alice', password: '12345'}
];

document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    const userExists = users.some(user =>
        user.login == login && user.password == password
    );

    if(userExists) {
        showMessage('Успешно! Добро пожаловать', 'success');
        setTimeout (() => {
            window.location.href = 'car select.html'
        }, 1000);
    } else {
        showMessage('Неверный логин или пароль', 'error');
    }


    function showMessage(text, type) {
        const message = document.getElementById('message')
        message.textContent = text;
        message.classList = `message ${type}` ;
        message.style.display = 'block';
    }

});





