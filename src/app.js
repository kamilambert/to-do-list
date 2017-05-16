const express = require('express')
const app = express()

app.get('/', function(req, res) {
	res.send('This is the homepage!')
})


app.get('*', function(req, res) {
	res.send('This is not a real page!')
})


app.listen(3000, function() {
	console.log('here is yo server!');
})
