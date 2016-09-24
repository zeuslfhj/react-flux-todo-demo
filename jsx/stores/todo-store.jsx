import {get as DispatcherGetter} from '../dispatcher';
import utils from 'flux/utils';
import TodoModel from '../models/todo-model';
import Constants from '../constants';

class Store extends utils.Store{
	constructor(dispatcher){
		super(dispatcher);
		var testModel1 = new TodoModel({text: "test todo1", complete: false});
		var testModel2 = new TodoModel({text: "test todo2", complete: true});
		this.state = [testModel1, testModel2];
	}
	destroy(){
		this.getDispatcher().unregister(this.getDispatchToken());
	}
	getTodos(){
		return this.state;
	}
	addTodo(value){
		if (!value) {
			return;
		}

		var data = new TodoModel({
			text: value
		});

		this.state.push( data );
	}
	removeTodo(id){
		var index = this.state.findIndex(todo => {
			return todo.id == id;
		});

		this.state.splice(index, 1);
	}
	__onDispatch(payload){
		switch(payload.actionType){
			case Constants.ADD_TODO:
				this.addTodo(payload.todoValue);
				this.__emitChange(this.state);
				break;
			case Constants.REMOVE_TODO:
				this.removeTodo(payload.todoID);
				this.__emitChange(this.state, payload.todoID);
				break;
		}
	}
}

var instance = new Store(DispatcherGetter());
function get(){
	return instance;
}

module.exports = {
	get : get
}