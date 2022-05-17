// const jokes = require("give-me-a-joke");
// const colors = require("colors");
// jokes.getRandomDadJoke(function (joke) {
//      console.log(joke.rainbow);
// })

const figlet = require("figlet");
const colors = require("colors");
figlet("hello world", function (err, data) {
    if (err) {
        console.log("something went wrong");
        console.log(err);
        return;
    }
    console.log(data.rainbow)
});