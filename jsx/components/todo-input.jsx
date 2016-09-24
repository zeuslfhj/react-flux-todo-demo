'use strict';

import React from 'react';
import {addTodo} from '../actions/todo-action';


class TodoInput extends React.Component{
	constructor(props){
		super(props);

		this.state = {value:'default value'};
		this._handleChange = this._handleChange.bind(this);
		this._onKeyDown = this._onKeyDown.bind(this);
	}
	_handleChange(event){
		this.setState({value: event.target.value});
	}
	_onKeyDown(event){
		if(event.keyCode === 13) {
			addTodo(event.target.value);
			event.target.value = '';
		}
	}
	render(){
		return <div>
			<input 
			 type="text" 
			 className="todo-input" 
			 id="todo-input" 
			 value={this.state.value}
			 placeholder={this.props.placeholder}
			 onChange={this._handleChange}
			 onKeyDown={this._onKeyDown}
			/>
		</div>
	}
}

export default TodoInput;