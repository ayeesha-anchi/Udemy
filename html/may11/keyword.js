//HERE THROW WILL NOT WORK
// const sing = async () => {
//     return 'FINE';
//     throw 'THERE IS A PROBLEM';
// }

// const { reject } = require("async");

// sing()
//     .then((data) => {
//         console.log('Promise is resolved');
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log('Promise rejected');
//         console.log(err)
//     })



//ASYNC KEYWORD
// const login = async (username, password) => {
//     if (!username || !password) throw 'missing credentials';
//     if (password === 'ayeesha') return 'logged in!';
//     throw 'invalid data';
//     // if (!username && !password) {
//     //     return 'missing credentials'
//     // } else if (password === 'ayeesha') {
//     //     return 'logged in!'
//     // } else {
//     //     throw 'invalid data'
//     // } 
// }
// login('jshk','hgds')
//     .then(data => {
//         console.log('welcome');
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('error');
//         console.log(err);
//     })


//AWAIT KEYWORD

// const delayColor = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         },delay)
//     })
// }

// async function rainbow() {
//     await delayColor('purple', 1000);
//     await delayColor('blue', 1000);
//     await delayColor('pink', 1000);
//     await delayColor('cyan', 1000);
//     await delayColor('red', 1000);
//     await delayColor('yellow', 1000);
//     return 'done';
// }

// // rainbow().then(()=>console.log('end'));

// async function printRainbow() {
//     await rainbow();
//     console.log('end');
// }
// printRainbow();


//HANDLING ERROR IN ASYNC

const request = (url) => {
    return new Promise((resolve, reject) => {
        const delay=Math.floor(Math.random()*(4500)+500)
        setTimeout(() => {
            if (delay > 4000) {
                reject('connection out');
            } else {
                resolve(`here is the data ${url}`)
            }
        }, delay);
    })
}

async function newRequest(){
    try {
        let val1 = await request('/request 1');
        console.log(val1);
        let val2 = await request('/request 2');
        console.log(val2);
    } catch (e){
        console.log("caught an error");
        console.log(e)
    }
}