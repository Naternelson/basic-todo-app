import { useEffect, useState } from 'react';
import { InputField } from './InputField';
import { TodoList } from './TodoList';

/**
 * Your task is to create a simple to-do list application.
 * The InputField component should have an input field and a button.
 * Its expecting a function as a prop that will be called when the button is clicked.
 * The input field should be used to add new to-do items to the list.
 * 
 * The TodoList component should display the list of to-do items.
 * Its expecting an array of strings as a prop, as well as a function to delete items from the list
 * Each to-do item should have a delete button that removes the item from the list.
 * 
 * The Container component should render the InputField and TodoList components.
 * Div Tags with the class name "container" and "container-form" and "container-list" have been provided for you, to style the components.
 * 
 * The styling is done using CSS, which is already provided for you in the src/index.css file.
 * 
 */


export const Container = () => {

	/**
	 * 
	 * Create a state variable called "todos" using the useState hook.
	 * The state variable should be an array of strings.
	 * 
	 * Notice the typescript syntax for the useState hook. -> useState<string[]>([]);
	 * Normal JavaScript syntax would be -> useState([]);
	 * 
	 * Example: 
	 * 		const [todos, setTodos] = useState<string[]>([]);
	 * 
	 * Its common practice to use the name of the state variable as the first element in the array, and the name of the function to update the state variable as the second element in the array.
	 * Preferably, use the name "todos" for the state variable, and "setTodos" for the function to update the state variable.
	 * As convention we use the preface "set" before the state variable name to update the state variable.
	 */

	// State variables HERE

	const handleTodoItem = (value: string) => {
		/**
		 * Use the setTodos function to add the new to-do item to the list.
		 * As an added measure try to trim the value before adding it to the list, and also check if the value is an empty string.
		 * if it is an empty string, do not add it to the list.
		 * 
		 * For best practice, pass a callback function to the setTodos function, to ensure that the previous state is used to update the new state.
		 * 
		 * Example:
		 * 		setTodos((prev) => {
		 * 			return [...prev, value];
		 * 		});
		 * 
		 * Be sure to pass this function as a prop to the InputField component.
		 * Input the code below these comments
		 */

	};
	const handleDeletion = (index: number) => {
		// let newTodos = todos.filter((_, i) => i !== index);
		// setTodos(newTodos);

		/**
		 * This function accepts an index as an argument, and removes the to-do item at that index from the list.
		 * Use the setTodos function to update the list of to-do items.
		 * If the index is not found, do nothing.
		 * 
		 * For best practice, pass a callback function to the setTodos function, to ensure that the previous state is used to update the new state.
		 * 
		 * Example:
		 * 		setTodos((prev) => {
		 * 			return prev.filter((_, i) => i !== index);
		 * 		});
		 * 
		 * Be sure to pass this function as a prop to the TodoList component.
		 * Input the code below these comments
		 */
	};

	return (
		<div className="container">
			<div className="container-form">
				<h1>To Do List</h1>
				{/** Insert the InputField Component here - be sure to pass the addTodoItem prop */}
			</div>
			<div className="container-list">
				{/** Insert the TodoList Component here - be sure to pass the todoList and onDelete props */}
			</div>
		</div>
	);
};
