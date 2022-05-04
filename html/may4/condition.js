// console.log("statement before condition");
// let random = Math.random();
// if (random < 0.5) {
//     console.log("The number is less than 0.5");
//     console.log("the number is",random);
// }

// if (random >= 0.5) {
//     console.log("The number is greater than 0.5");
//     console.log("the number is",random);
// }


// const season = 'summer';

// if (season === "summer") {
//     console.log('ughhh i hate summer')
// } else if(season === 'winter'){
//     console.log('i love winter')
// } else if (season === 'rainy') {
//     console.log('it is ok')
// }


// 0 - 5 - free
// 5 - 10 child 
// 10 - 65 adult
// 65+ senior citizen




// const age = 9;
  
// if (age < 5) {
//     console.log('you are small kid you can enter free');
// } else if (age < 10) {
//     console.log('you are child you have to pay half amnt');
// } else if (age < 65) {
//     console.log('you are adult you have to pay full amnt');
// } else {
//     console.log('you are senior citizen you have to pay half')
// }


// const password = prompt('please enter a new password');

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log('valid password!!!');
//     } else {
//         console.log('password cannot contain spaces!')
//     }
// } else {
//     console.log('password too short! must be 6+ characters')
// }


// const userInput = prompt('enter something');

// if (userInput) {
//     console.log('TRUTHY!');
// } else {
//     console.log('FALSY!')
// }

// if (0) {
//     console.log('TRUTHY!');
// } else {
//     console.log('FALSY!')
// }

// if (Nan) {
//     console.log('TRUTHY!');
// } else {
//     console.log('FALSY!')
// }

// if (undefined) {
//     console.log('TRUTHY!');
// } else {
//     console.log('FALSY!')
// }


// AND OPERATOR
// const password = prompt('Enter your password');
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('valid password');
// } else {
//     console.log('incorrect password!')
// }

//OR OPERATOR
// const age = prompt('enter your age');
  
// if (age>=0 && age < 5 || age>65) {
//     console.log('you can enter free');
// } else if (age>=5 && age < 10) {
//     console.log('you are child you have to pay half amnt');
// } else if (age>=10 && age < 65) {
//     console.log('you are adult you have to pay full amnt');
// } else {
//     console.log('invalid age')
// }

//AND OPERATOR
// const age = 45;
// if (!(age >= 0 && age < 5 || age >= 65)) {
//     console.log('you are not a kid and not a senior')
// }


//switch statement

const day = 5;
switch (day) {
    case 1:
        console.log('MONDAY');
        break;
    case 2:
        console.log('TUESDAY');
        break;
    case 3:
        console.log('WEDNESDAY');
        break;
    case 4:
        console.log('THURSDAY');
        break;
    case 5:
        console.log('FRIDAY');
        break;
    case 6:
    case 7:
        console.log('WEEKEND');
        break;
    default:
        console.log('I DONT KNOWS');
        break;
}