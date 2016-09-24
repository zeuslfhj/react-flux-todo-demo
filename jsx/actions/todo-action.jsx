'use strict';
import {get as DispatcherGetter} from '../dispatcher';
import Constants from '../constants';

var actions = {
	createAction(actionName, values){
		return Object.assign({actionType:actionName}, values);
	},
	addTodo(todoValue){
		var action = actions.createAction(Constants.ADD_TODO, {todoValue});
		DispatcherGetter().dispatch(action);
	}
}

module.exports = actions;