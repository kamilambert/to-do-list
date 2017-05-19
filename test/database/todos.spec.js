const chai = require('chai')
const expect = chai.expect
const db = require('../../src/database/todos')

describe('createTodo()', function() {
	it('should add a single to-do', function(done) {
		db.createTodoTest('go to the store')
		.then(function(){
			db.getTodoByName('go to the store')
			.then(function(result) {
				expect(result.length).to.eql(1)
				expect(result[0].to_do).to.eql('go to the store')
				done()
			})
		})
	})
})

describe('completeTodo()', function() {
	it('should check to-do off as complete', function(done) {
		db.completeTodoTest(1)
		.then(function() {
			db.getTodoByName('go to the store')
			.then(function(result) {
				expect(result[0].complete).to.equal(true)
				done()
			})
		})
	})
})

describe('editToggleTodo()', function() {
	it('should edit to-do text', function(done) {
		db.editToggleTodoTest(1)
		.then(function() {
			db.getTodoByName('go to the store')
			.then(function(result) {
				expect(result[0].edit).to.equal(true)
				done()
			})
		})
	})
})

describe('removeTodo()', function(done) {
	it('should remove a todo', function() {
		db.removeTodoTest(1)
		.then(function() {
			db.getTodoByName('go to the store')
			.then(function(result) {
				expect(result).to.equal([])
				done()
			})
		})
	})
})
