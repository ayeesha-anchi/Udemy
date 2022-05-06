// for (num = 1; num<= 10; num++){
//     console.log('Im in loop body');
//     console.log(num);
// }

// for (let i = 1; i <= 20; i += 2){
//     console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10){
//     console.log(i);
// }

//NESTED LOOPS

// for (let i = 1; i <= 10; i++){
//     console.log(`i is ${i}`)
//     for (let j = 1; j <= 3; j++){
//         console.log(`          j is ${j}`)
//     }
// }

// const items = [
//     ['chair', 'bed', 'matress'],
//     ['cup', 'glass', 'plate', 'spoke'],
//     ['office', 'college','school','home']
// ]


//using normal for loop
// for (let i = 0; i <= items.length-1; i++){
//     const row = items[i];
//     console.log(`row ${i+1}`)
//     for (let j = 0; j <= row.length; j++){
//         console.log(`items are ${row[j]}`);
//     }
// }

//using for of loop

// for (let row of items) {
//     for (let things of row) {
//         console.log(things);
//     }
// }


const testScores = {
    abc: 87,
    cdf: 56,
    nbf: 98,
    jhg: 50,
    jug: 90
}

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`)
// }

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total/scores.length)