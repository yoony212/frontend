const main = document.getElementById('main');

fetch('https://my-json-server.typicode.com/techacademy-curricula/frontend-json-server/profile')
  .then((response) => response.text())
  .then((data) => { main.textContent = data; });