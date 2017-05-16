const promise = require('bluebird')

const options = {
	//Initialization Options
	promiseLib: promise
}

const pgp = require('pg-promise')(options)
const connectionString = 'postgres://localhost:5432/todo_list'
const db = pgp(connectionString)

function getAllTodos (req, res, next) {
	db.any('SELECT * FROM todos')
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

// function getOneTodo(req, res, next) {
//   let todoID = req.params.id;
//   db.one('select * from todos where id = $1', todoID)
//     .then(function (data) {
//       res.status(200)
//         .json({
//           status: 'success',
//           data: data,
//           message: 'Retrieved ONE todo'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }

function createTodo (req, res, next) {
	db.none('INSERT INTO todos(to_do, complete)' + 'VALUES($1, $2)', [req.body.to_do, req.body.complete])
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

function removeTodo (req, res, next) {
	const todoID = parseInt(req.params.id)
	db.result('DELETE FROM todos WHERE id = $1', todoID)
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

module.exports = {
	getAllTodos: getAllTodos,
	createTodo: createTodo,
	removeTodo: removeTodo,
	// editTodo: editTodo
}
