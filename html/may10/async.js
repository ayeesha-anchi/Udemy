//BASICS HOW JS WORKS IN BACKGROUND

// const multiply = (x, y) => { x * y };
// const square = x => multiply(x, x);
// const isRightAngle = (a, b, c) => {
//     square(a) + square(b) === square(c);
// }
// console.log('before');
// isRightAngle(3, 4, 3);
// console.log('after');



// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'pink';
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


//Using Callback

const delayColor = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    },delay)
}

delayColor('red', 1000, () => {
    delayColor('yellow', 1000, () => {
        delayColor('orange', 1000, () => {
            delayColor('purple', 1000, () => {
                delayColor('pink', 1000, () => {
                    
                })
            })
        })
    })
});


// searchMoviesAPI('amadeus', () => {
//     saveToMyDB(movies, () => {
//         //if it works, run this:
//     }, () => {
//         //if it doesn't work, run this:
//     })
// }, () => {
//     //if API is down, or request failed
// })
