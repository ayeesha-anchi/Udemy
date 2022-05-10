const form = document.querySelector('#submitForm');
const input = document.querySelector('#name');
const list = document.querySelector('#list');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = input.value;
    const newLI = document.createElement('LI');
    newLI.innerText = name;
    list.append(newLI);
    input.value = '';
});

list.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})