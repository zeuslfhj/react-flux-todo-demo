import {Dispatcher} from 'flux';

var instance = new Dispatcher();

function get() {
	return instance;
}

export {get}