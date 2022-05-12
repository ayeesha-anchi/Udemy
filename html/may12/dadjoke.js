const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addJoke = async () => {
    const dadJoke = await getJokes();
    const newLi = document.createElement('li');
    newLi.append(dadJoke);
    jokes.append(newLi)
}
const getJokes = async () => {
    try {
        const config = { headers: {Accept:'application/json'} }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        console.log(res.data.joke);
        return res.data.joke;
    } catch (e) {
        console.log('no jokes',e)
    }
}

button.addEventListener('click',addJoke);