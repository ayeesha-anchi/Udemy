// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log('Request 1', res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2/")
//     })
//     .then((res) => {
//         console.log('second request', res)
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('error', err);
//     })



//USING ASYNC

// const asyncData = async () => {
//     try {
//         const res =await fetch("https://swapi.dev/api/people/1/");
//         const data = await res.json();
//         console.log(data);
//         const res2 =await fetch("https://swapi.dev/api/people/2/");
//         const data2 = await res2.json();
//         console.log(data2);
//     } catch(err) {
//         console.log('error',err)
//     }
// }
// asyncData();

//USING AXIOS

// axios
//     .get("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log('response',res)
//     })
//     .catch((err) => {
//         console.log('error occured', err);
//     })


//USING AXIOS WITH ASYNC

const asyncAxios = async (id) => {
    try {
        const res =await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    } catch (e) {
        console.log('error',e)
    }
    
}
asyncAxios(5);


//GET METHOD USING AXIOS

//DAD JOKES EXAMPLE

// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button');

// const addJoke = async () => {
//     const dadJoke = await getJokes();
//     const newLi = document.createElement('li');
//     newLi.append(dadJoke);
//     jokes.append(newLi)
// }
// const getJokes = async () => {
//     try {
//         const config = { headers: {Accept:'application/json'} }
//         const res = await axios.get('https://icanhazdadjoke.com/', config)
//         console.log(res.data.joke);
//         return res.data.joke;
//     } catch (e) {
//         console.log('no jokes',e)
//     }
// }

// button.addEventListener('click',addJoke);