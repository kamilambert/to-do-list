const express = require('express')
const app = express()
const routes = require('./server/routes/todos')
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.urlencoded({extended: false}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public')) // google this


app.use(bodyParser.json())

app.use('/', routes)

app.listen(3000, function() {
	console.log('here is yo server!');
})

module.exports = app
