const express = require('express')
const app = express()
const routes = require('./server/routes/todos')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', routes)

app.listen(3000, function() {
	console.log('here is yo server!');
})
