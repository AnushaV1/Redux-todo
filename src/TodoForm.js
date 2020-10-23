import React, {useState} from "react";

const TodoForm = ({newTodo}) => {
    const [task, setTask] = useState('');

    const handleChange = e => {
        setTask(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        newTodo(task);
        setTask('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Task:</label>
            <input type="text" name="todo" id="todo" placeholder="Add an item to List" onChange={handleChange} value={task} />
            <button>Add a task</button>
            </form>
        </div>

    )
}

export default TodoForm;