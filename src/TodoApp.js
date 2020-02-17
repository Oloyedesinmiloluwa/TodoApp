import React, { Component } from 'react';
import TodoList from './TodoList';
import './todo.css';

class TodoApp extends Component {
	state = {
		inputText: '',
		noOfItems: 0,
		items: []
	}
	handleChange = (event) => {
		this.setState({ inputText: event.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { items, inputText } = this.state;
		this.setState(prevState => ({
			noOfItems: prevState.noOfItems + 1 ,
			items: [...items, { id: this.state.noOfItems, text: inputText }]
		}));
		this.setState({items: [...items, { id: this.state.noOfItems, text: inputText }]});
	}

	render () {
		const { items } = this.state;
		return (
		<div className="wrapper">
			<h2> My Todo App </h2>
			<form>
			<input onChange={this.handleChange} onSubmit={() => {}} placeholder="Enter a new todo"/>
			<button onClick = {this.handleSubmit} > + </button>
			</form>
			{items[0] ? <TodoList items = {items.sort((a,b) => b.id - a.id )} />
			: <p style={{ textAlign: 'center', marginTop: '30px'}}>No items added yet, simply click the add button</p>}
		</div>
		);
	}
}

export default TodoApp;
