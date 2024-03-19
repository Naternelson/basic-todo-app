import { useEffect, useState } from 'react';
import { InputField } from './InputField';
import { TodoList } from './TodoList';

export const Container = () => {
	const [todos, setTodos] = useState<string[]>([]);

	const handleTodoItem = (value: string) => {
		let newValue = value.trim();
		if (newValue === '') return;
		setTodos((p) => [...p, newValue]);
	};
	const handleDeletion = (index: number) => {
		let newTodos = todos.filter((_, i) => i !== index);
		setTodos(newTodos);
	};

	useEffect(() => {
		console.log(todos);
	}, [todos]);

	return (
		<div className="container">
			<div className="container-form">
				<h1>To Do List</h1>
				<InputField addTodoItem={handleTodoItem} />
			</div>
			<div className="container-list">
				<TodoList todoList={todos} onDelete={handleDeletion} />
			</div>
		</div>
	);
};
