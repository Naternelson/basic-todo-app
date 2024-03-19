/**
 * Your task is to create a simple to-do list application.
 * The TodoList component should display the list of to-do items.
 * Its expecting an array of strings as a prop, as well as a function to delete items from the list
 * Each to-do item should have a delete button that removes the item from the list.
 * 
 * Below you can see an interface for the props that the TodoList component is expecting.
 * Currently it expects two props, one called "todoList" which is an array of strings, and another called "onDelete" which is a function that takes a number as an argument and returns void.
 * 'Void' is a type that represents the absence of a value, and is used as the return type of functions that do not return a value.
 * 
 */

interface TodoListProps {
    todoList: string[];
    onDelete: (index: number) => void;
}

export const TodoList: React.FC<TodoListProps> = (props) => {
    /*  Extract the todoList, and onDelete properties from the props argument. You can destructure it like this: 
     *  const { todoList, onDelete } = props;
     */
    return (
        <ul>
            {/* 
                Iterate through the todoList array using the map function.
                For each item in the array, return a list item element with the item as the content.
                Also include a button that calls the onDelete function when clicked.
                Pass the index of the item as an argument to the onDelete function.
                This way the onDelete function knows which item to delete from the list.

                Example:
                    <li key={index}>
                        {item}
                        <button onClick={() => onDelete(index)}>Delete</button>
                    </li>
                
                Notice when using the map function, you should include a unique key prop for each item in the list.
                This will automatically be expected by React, and will help React to keep track of the items in the list.

                Since you're executing code within the JSX, you should wrap the code in curly braces.

                Example: 
                    {todoList.map((item, index) => {
                        return (
                            <li key={index}>
                                {item}
                                <button onClick={() => onDelete(index)}>Delete</button>
                            </li>
                        );
                    })}
            */}
        </ul>
    )
}