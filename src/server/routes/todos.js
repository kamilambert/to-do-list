const express = require('express')
const router = express.Router()

const db = require('/Users/kamilalambert/Desktop/Projects/to-do-list/src/database/todos.js')

router.get('/', db.getAllTodos)
router.post('/createTodo', db.createTodo)
router.post('/edit/:id', db.editTodo)
router.post('/delete/:id', db.removeTodo)
router.post('/complete/:id', db.completeTodo)

module.exports = router
