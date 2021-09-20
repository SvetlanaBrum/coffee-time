const inputField = document.querySelector('#search');
const divs = document.querySelectorAll('.coffee');
const menu = document.querySelector('.menu-board');

console.log(menu);

inputField.addEventListener('keyup', function(event) {
    const word = event.target.value.toLowerCase();

    divs.forEach(item => {
        item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');
    })
})