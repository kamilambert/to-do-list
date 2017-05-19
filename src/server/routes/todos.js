const express = require('express')
const router = express.Router()

const db = require('../../../src/database/todos.js')

router.get('/', db.getAllTodos)
router.get('/oneTodo/:to_do', db.getTodoByName)
router.post('/createTodo', db.createTodo)
router.post('/editToggle/:id', db.editToggleTodo)
router.post('/delete/:id', db.removeTodo)
router.post('/complete/:id', db.completeTodo)
router.post('/editTodo/:id', db.editTodo)

module.exports = router
