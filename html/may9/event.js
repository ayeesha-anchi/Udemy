const btn = document.querySelector('#button');

btn.onclick = function () {
    console.log('hey good morning');
    console.log('bye....')
}

function close() {
    console.log('time to close');
    console.log('meet you soon');
}
btn.onmouseover = close;

document.querySelector('h1').onclick = () => {
    alert('im heading');
}

const btn3 = document.querySelector('#b3');
// btn3.onclick = () => {
//     console.log('this our third button')
// }

btn3.addEventListener('click', function () {
    alert('clicked');
});

function twist() {
    console.log('TWIST')
}

function turn() {
    console.log('TURN')
}

const tatbtn = document.querySelector('#tat');
// tatbtn.addEventListener('click', function () {
//     console.log('im turn and twist')
// })

//here only twist will work
// tatbtn.addEventListener('click',twist,turn)

tatbtn.addEventListener('click', twist);
tatbtn.addEventListener('click', turn)


//input and change events

const input = document.querySelector('input');
const h2 = document.querySelector('h2');
input.addEventListener('change', function (e) {
    console.log('change event')
})

input.addEventListener('input', function (e) {
    console.log('Input the data');
    h2.innerText = input.value;
})