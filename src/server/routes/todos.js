const express = require('express')
const router = express.Router()

const db = require('/Users/kamilalambert/Desktop/Projects/to-do-list/src/database/todos.js')

router.get('/todos', db.getAllTodos)
router.post('/todos', db.createTodo)
router.put('/todos/:id', db.editTodo)
router.delete('/todos/:id', db.removeTodo)

module.exports = router
