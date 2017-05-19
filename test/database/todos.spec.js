const chai = require('chai')
const expect = chai.expect
const db = require('../../src/database/todos')

describe('getAllTodos()', function() {
	it('should be a function', function() {
		expect(db.getAllTodos).to.be.a('function')
	})
})

describe('createTodo()', function() {
	it('should add a single to-do', function(done) {
		db.createTodoSmall('go to the store')
		db.createTodoSmall('go to the salon')
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

describe('removeTodo()', function() {
	it('should edit a todo', function(done) {
		db.removeTodoSmall(1)
		.then(function(result) {
			expect(result[0].to_do).to.equal()
			done()
		})
	})
})
