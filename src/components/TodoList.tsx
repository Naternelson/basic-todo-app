interface TodoListProps {
    todoList: string[];
    onDelete: (index: number) => void;
}

export const TodoList: React.FC<TodoListProps> = (props) => {
    const { todoList, onDelete } = props;
    return (
        <ul>
            {todoList.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => onDelete(index)}>Remove</button>
                </li>
            ))}
        </ul>
    )
}