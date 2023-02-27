const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

app.engine('handlebars',
    expressHandlebars.engine({
        defaultLayout: 'main',
    }))
app.set('view engine', 'handlebars')

const port = process.envPORT || 3000

app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', { fortune: randomFortune })
})

app.use((req, res) => {
    res.status(404)
    res.render('404')
})
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found')
})

app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(
    'Express started on ' +
    'http://localhost:${port}; ' +
    'press Ctrl-C to terminate.'))

const fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
]
