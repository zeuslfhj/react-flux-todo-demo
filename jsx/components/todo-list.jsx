import React from 'react';
import TodoStore from '../stores/todo-store';
import TodoModel from '../models/todo-model';

class TodoList extends React.Component{
	constructor(){
		super();

		this.state = {};
		this.store = TodoStore.get();
		TodoStore.get().addListener(this.onTodoListChanged.bind(this));
	}
	componentDidMount() {
		this.todos = this.store.getTodos();
	}
	onTodoListChanged(){
		this.todos = this.store.getTodos();
	}
	get todos(){
		return this.state.todos;
	}
	set todos(value=[]){
		this.state.todos = value;
		this.setState(this.state);
	}
	render(){
		var children;

		if (this.todos) {
			children = this.todos.map(todo => {
				return <p key={todo.id}>{todo.text}</p>
			});
		}

		return <div className="todo-list">
			{children}
		</div>
	}
}

module.exports = TodoList;