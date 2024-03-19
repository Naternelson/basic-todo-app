import { useState } from 'react';

/**
 * Your task is to create a simple to-do list application.
 * The InputField component should have an input field and a button.
 * Its expecting a function as a prop that will be called when the button is clicked.
 * The input field should be used to add new to-do items to the list.
 *
 * Below you can see an interface for the props that the InputField component is expecting.
 * Currently it expects one prop called "addTodoItem" which is a function that takes a string as an argument and returns void.
 * 'Void' is a type that represents the absence of a value, and is used as the return type of functions that do not return a value.
 *
 * The Input field is a controlled component, meaning that the value of the input field is controlled by the state of the component.
 * You can see that the value of the input field is set to the state variable "value" and the onChange event is used to update the state variable "value".
 *
 * This is a common pattern in React, where the state of the component is used to control the value of the input field.
 * This way you can access the value of the input field at any time by accessing the state variable "value", without having to use the DOM to access the input field.
 */
export interface InputFieldProps {
	addTodoItem: (value: string) => void;
}

export const InputField = (props: InputFieldProps) => {
	/**
	 * Create a state variable called "value" using the useState hook.
	 * The state variable should be a string.
	 * Create a function called "setValue" to update the state variable.
	 *
	 * Notice the typescript syntax for the useState hook. -> useState<string>('');
	 * Normal JavaScript syntax would be -> useState('');
	 *
	 * Example:
	 * 		const [value, setValue] = useState<string>('');
	 *
	 * Its common practice to use the name of the state variable as the first element in the array, and the name of the function to update the state variable as the second element in the array.
	 * Preferably, use the name "value" for the state variable, and "setValue" for the function to update the state variable.
	 * As convention we use the preface "set" before the state variable name to update the state variable.
	 *
	 * Input the code below these comments
	 */

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		/**
		 * Use the setValue function to update the state variable "value" with the value of the input field.
		 * Since we are replacing the value of the state variable with the value of the input field, we can use the event object to access the value of the input field.
		 * To Access the value of the input field, use the "e.target.value" property.
		 * Input the code below these comments
		 */
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		/**
		 * This function should be called when the form is submitted.
		 * It should prevent the default behavior of the form, and call the "addTodoItem" function that was passed as a prop to the InputField component.
		 * It should also reset the value of the input field to an empty string.
		 *
		 * Input the code below these comments
		 */
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-group">
				{/* Create an input field here with props of type='text', placholder of 'Add TODO' the controlled 'value' and the onChange passing in the handleChange function */}
			</div>
			{/* Create a button here with the text "Add" and a type of "submit", As an added styling measure, pass the class name of "full-width"*/}
		</form>
	);
};
