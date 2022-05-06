//function scope

// let num = 0;
// function total() {
//     let num = 10;
//     console.log(num);
// }
// console.log(num);
// total();
// console.log(num);

// let fname = 'abc';
// function fullName() {
//     cname = 'xyz'
//     console.log(cname);
//     console.log('********')
// }
// fullName();
// console.log(fname);


//block scope

// let num = 5;
// if (num <= 10) {
//     let num = 10;
//     console.log(num);
// }
// console.log(num);


//lexical scope

// function fullName() {
//     let surname = 'anchi';
//     function fname() {
//         let fname = 'ayeesha';
//         console.log(`my name is ${fname} ${surname}`);
//     }
//     console.log(surname);
//     fname();
// }
// fullName();

//function exppression

// const method = function (x, y) {
//     return x + y;
// }
// method();

//Higher order function

// function school(table) {
//     console.log('hiii Im from school')
// }

// function room(hall) {
//     for (let i = 0; i < 10; i++)
//         console.log(i); 
// }
// room(school());

//returning a function

// function value() {
//     const val = Math.random();
//     if (val <= 0.5) {
//         return function () {
//             console.log(`the number is less than 0.5 ${val} `)
//         }
//     } else {
//         return function () {
//             console.log(`the number is greater than 0.5 ${val} `)
//         }
//     }
// }


//Defining method

// const myVal = {
//     PI: 3.14152,
//     add(x, y)                             {   //new method
//         return x + y;
//     },
//     multiply: function (x, y)            {  //old method
//         return x * y;
//     },
// }

//this keyword

const cat = {
    cname: 'abcd',
    color: 'black',
    breed: 'xyz',
    meow() {
        console.log('this is:',this)
        console.log(`${this.cname} say meow`)
    }

}
const meow2 = cat.meow;