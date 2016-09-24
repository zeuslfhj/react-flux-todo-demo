import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './components/todo-input';
import TodoList from './components/todo-list'

class MainContent extends React.Component{
	render(){
		return <div>
			this is main
			<TodoList />
			<TodoInput placeholder="Please Input ur event" />
		</div>
	}
};

ReactDOM.render(<MainContent />, document.getElementById("main_container"));