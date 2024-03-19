import { useState } from 'react';

export interface InputFieldProps {
	addTodoItem: (value: string) => void;
}

export const InputField = (props: InputFieldProps) => {
	let [value, setValue] = useState<string>('');
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.addTodoItem(value);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-group">
				<input type="text" placeholder="Add TODO" value={value} onChange={handleChange} />
			</div>
			<button className="full-width" type="submit">
				Add
			</button>
		</form>
	);
};
