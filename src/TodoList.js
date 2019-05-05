import React from 'react';

const TodoList = ({ items = [] }) => (
	<div className = 'todolist'>
	<ul>
		{
			items.map((item, id) =>
				<span>
					<li key={item.id}>{item.text}</li>
				</span>
			)}
	</ul>
	</div>
)
export default TodoList;
