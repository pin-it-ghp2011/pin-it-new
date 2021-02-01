// background.js
//alert('Hello from your Chrome extension-content file- sent by bacground!');
document.addEventListener('DOMContentLoaded', () => {
  let button = document.getElementById('submit');

  button.addEventListener('click', (event) => {
    console.log('Hello');
  });
});
