import React, { Component } from 'react';
import TodoList from './TodoList';
import './todo.css';
class TodoApp extends Component {
	render () {
		const sampleItem = [{id: 1, text: 'I want to finish module 1'}];
		return (
		<div className="wrapper">
			<h2> My Todo App </h2>
			<input onChange={() => {}} onSubmit={() => {}} placeholder="Enter a new todo"/>
			<button onClick = {() => {}} > + </button>
			<TodoList items = {sampleItem} />
		</div>
		);
	}
}

export default TodoApp;
