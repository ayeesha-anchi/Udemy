const request = (url) => {
    return new Promise((resolve, reject) => {
    const val = Math.random();
        setTimeout(() => {
            if (val < 0.7) {
                resolve('You got ur data');
            }
            reject('Connection error');
        },1000)
    })
}

request('/icecreams')
    .then((data) => {
        console.log('Accepted1');
        console.log('my data is:', data)
        return request('/icecreams');
    })
    .then((data) => {
        console.log('Accepted2');
        console.log('my data is:', data)
        return request('/icecreams');
    })
    .then((data) => {
        console.log('Accepted3');
        console.log('my data is:', data)
        return request('/icecreams');
    })
    .then((data) => {
        console.log('Accepted4');
        console.log('my data is:', data)
    })
    .catch((err) => {
        console.log('Time Out');
        console.log('problem', err)
    })