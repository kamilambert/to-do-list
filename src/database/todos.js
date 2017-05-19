const promise = require('bluebird')

const options = {
	promiseLib: promise
}

const pgp = require('pg-promise')(options)
const connectionString = 'postgres://localhost:5432/todo_list'
const db = pgp(connectionString)

function getAllTodosTest () {
	return db.any('SELECT * FROM todos')
}

function getAllTodos (req, res, next) {
	getAllTodosTest()
		.then(function (data) {
			res.render('layout', {
				data
			})
		})
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'Retrieved ALL Todos'
				})
		})
		.catch(function (err) {
			return next(err)
		})
}

function createTodoTest(to_do) {
	return db.none('INSERT INTO todos(to_do, complete, edit)' + 'VALUES($1, FALSE, FALSE)', to_do)
}

function createTodo (req, res, next) {
	createTodoTest(req.body.to_do)
		.then( () => res.redirect ('/'))
		.then(function () {
			res.status(200)
				.json({
					status: 'success',
					message: 'Inserted todo'
				})
		})
		.catch(function (err) {
			return next(err)
		})
}

function removeTodoTest(id) {
	return db.result('DELETE FROM todos WHERE id = $1', id)
}

function removeTodo (req, res, next) {
	const todoID = parseInt(req.params.id)
	removeTodoTest(todoID)
		.then( () => res.redirect ('/'))
		.then(function (result) {
			res.status(200)
				.json({
					status: 'success',
					message: `Remove ${result.rowCount} todo`
				})
		})
		.catch(function (err) {
			return next(err)
		})
}

function editToggleTodoTest(id) {
	return db.any('UPDATE todos SET edit=not edit WHERE id=$1', id)
}

function editToggleTodo (req, res, next) {
	const todoID = parseInt(req.params.id)
	editToggleTodoTest(todoID)
		.then( () => res.redirect ('/'))
		.then(function () {
			res.status(200)
				.json({
					status: 'success',
					message: 'Updated todo'
				})
		})
		.catch(function (err) {
			return next(err)
		})
}

function editTodoTest(id, to_do) {
	return db.none('UPDATE todos SET to_do=$2, edit=FALSE WHERE id=$1', [id, to_do])
}

function editTodo (req, res, next) {
	const todoID = parseInt(req.params.id)
	editTodoTest(todoID, req.body.to_do)
		.then( () => res.redirect ('/'))
		.then(function () {
			res.status(200)
				.json({
					status: 'success',
					message: 'Updated todo'
				})
		})
		.catch(function (err) {
			return next(err)
		})
}

function completeTodoTest(id) {
	return db.none('UPDATE todos SET complete=not complete WHERE id=$1', id)
}

function completeTodo (req, res, next) {
	const todoID = parseInt(req.params.id)
	completeTodoTest(todoID)
		.then( () => res.redirect ('/'))
		.then(function () {
			res.status(200)
				.json({
					status: 'success',
					message: 'Updated todo'
				})
		})
		.catch(function (err) {
			return next(err)
		})
}

function getTodoByName(to_do) {
	return db.any('select * from todos where to_do=$1', to_do)
}

module.exports = {
	getAllTodos,
	createTodo,
	removeTodo,
	editToggleTodo,
	completeTodo,
	getTodoByName,
	editTodo,
	createTodoTest,
	removeTodoTest,
	completeTodoTest,
	editToggleTodoTest
}
