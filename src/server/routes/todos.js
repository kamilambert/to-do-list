const express = require('express')
const router = express.Router()

const db = require('../../../src/database/todos.js')

router.get('/', db.getAllTodos)
router.get('/oneTodo/:id', db.getOneTodo)
router.post('/createTodo', db.createTodo)
router.post('/edit/:id', db.editTodo)
router.post('/delete/:id', db.removeTodo)
router.post('/complete/:id', db.completeTodo)

module.exports = router
