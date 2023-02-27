const express = require('express')
const expressHandlebars = require('express-handlebars')
const pokemon = require('./pokemon.json')
var willTrade = pokemon.filter(pokemon => pokemon.willTrade === true)
var sell = pokemon.filter(pokemon => pokemon.price !== null)
const app = express()

app.engine('handlebars',
    expressHandlebars.engine({
        defaultLayout: 'main',
    }))
app.set('view engine', 'handlebars')

const port = process.envPORT || 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) =>
    res.json(pokemon))
app.get('/api/cards', (req, res) =>
res.json(pokemon))

app.get('/api/cards/trade', (req, res) =>
res.json(willTrade))

app.get('/api/cards/sell', (req, res) =>
res.json(sell))

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