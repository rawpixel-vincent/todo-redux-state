/* * * * * * * * * * * * * * * * * * * * * * * * * *
	Run this demo in the console: node ./src/demo
* * * * * * * * * * * * * * * * * * * * * * * * * */

var todoReduxState = require('../build/todo-redux-state').default;

console.log(todoReduxState);

todoReduxState.subscribe(function() {
	console.log('@@@', JSON.stringify(todoReduxState.state.todos, null, 2));
});

todoReduxState.todos.loadTodos();
todoReduxState.todos.addTodo('demo test');
todoReduxState.todos.removeTodo('3');

