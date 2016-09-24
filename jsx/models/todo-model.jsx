var count = 0;

class TodoModel{
	constructor({text, complete = false}){
		this._id = `${(new Date()).getTime()}${count++}`;
		this._text = text;
		this._complete = complete;
	}
	get id(){
		return this._id;	
	}
	isComplete(){
		return this._complete;
	}
	set complete(isComplete){
		this._complete = isComplete;
	}
	get text(){
		return this._text;
	}
	set text(value){
		this._text = value;
	}
}

module.exports = TodoModel;