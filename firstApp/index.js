// const express = require("express")
// const app = express()

// app.use((req,res) => {
//     console.log("we got a new request")
//     res.send("hello we got response here")
// })



//here we are using / to go to another page "routing"

// app.get('/', (req ,res) => {
//     res.send("this is our home page")
// })

// app.post('/cat', (req ,res) => {
//     res.send("hey cat")
// })

// app.get('/cat', (req ,res) => {
//     res.send("hey cat")
// })

// app.get('/dog', (req ,res) => {
//     res.send("hey dog")
// })

// app.get('/r/:subreddit', (req, res) => {
//     const { subreddit } = req.params;
//     res.send(`<h1>browsing the ${subreddit} `)
// })

// app.get('/r/:subreddit/:postId', (req, res) => {
//     const { subreddit ,postId } = req.params;
//     res.send(`<h1>browsing the ${postId} from ${subreddit} `)
// })

// app.get('/search', (req, res) => {
//     const { q } = req.query;
//     if (!q) {
//         res.send("nothing found")
//     }
//     res.send(`<h1>Hi from search ${q}</h1>`)
// })

// app.get('*', (req ,res) => {
//     res.send("i don't know ")
// })


// app.listen(4000, () => {
//     console.log("listening on port 4000")
// })

const express = require("express")
const app = express()
const path=require('path')

app.set('view engine', 'ejs');
app.set('firstApp', path.join(__dirname, 'views'))
// app.get('/', (req, res)=>{
// res.rendor('random.ejs')})

app.get('/', (req ,res) => {
    res.send("this is our page")
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>browsing the ${subreddit} `)
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random',{num})
})

app.get('/colors', (req, res) => {
    const colors = [
        'red','green','blue','yellow'
    ]
    res.render('colors',{colors})
})

app.listen(4000, () => {
    console.log("listening on port 4000")
})
