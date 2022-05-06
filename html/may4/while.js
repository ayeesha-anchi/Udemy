// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count);
// }

// const SECRET = "baby";

// let guess = prompt('enter the secret code...');
// while (guess !== SECRET) {
//     guess = prompt('enter the secret code...');
// }
// console.log('CONGRATS YOU GOT THE SECRET');


// 


let maximum = parseInt(prompt('enter the maximum number'));
while (!maximum) {
    maximum = parseInt(prompt('enter a valid number'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('Enter your first guess'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess =prompt('too high,enter a new guess');
    } else {
        guess =prompt('too low,enter a new guess');
    }
}
if (guess === 'q') {
    console.log('OK,You quit')
} else {
    console.log('CONGRATS')
    console.log(`you got it ${attempts} guess`);
}