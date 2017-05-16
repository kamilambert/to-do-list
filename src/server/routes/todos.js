const express = require('express')
const router = express.Router()

const db = require('/Users/kamilalambert/Desktop/Projects/to-do-list/src/database/todos.js')

router.get('/todos', db.getAllTodos)
router.get('/todo/:id', db.getOneTodo)
router.post('/todos', db.createTodo)
// router.post('/todos', (req, res) => {
// 	console.log(req.body)
// })
// router.put('/todos/:id', db.editTodo)
// router.delete('/todos/:id', db.removeTodo)

module.exports = router
