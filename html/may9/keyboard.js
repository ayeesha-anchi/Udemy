document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt);
})


//here we are checking keyboard events
// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//     console.log(e.code);
//     console.log(e.key);
// })
// input.addEventListener('keyup', function (e) {
//     console.log('Key UP');
// })


window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('Arrow Up');
            break;
        case 'ArrowDown':
            console.log('Arrow Down');
            break;
        case 'ArrowLeft':
            console.log('Arrow Left');
            break;
        case 'ArrowRight':
            console.log('Arrow Right');
            break;
        default:
            console.log('Ignored');
            break;
    }
})