
let token = '';
function register() {
  fetch('https://your-backend-url.onrender.com/api/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      username: document.getElementById('email').value.split('@')[0]
    })
  }).then(res => res.json()).then(alert);
}
function login() {
  fetch('https://your-backend-url.onrender.com/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    })
  }).then(res => res.json()).then(data => {
    if (data.token) {
      token = data.token;
      document.querySelector('.auth-section').classList.add('hidden');
      document.querySelector('.task-section').classList.remove('hidden');
      getTasks();
    } else alert(data.message);
  });
}
