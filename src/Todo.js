import React, {useState} from "react";


const Todo = ({ task, id, updateTodo, deleteTodo }) => {
    const [editTask, setEditTask] = useState(task);
    const [isEditing, setIsEditing] = useState(false);

    function handleRemove() {
        deleteTodo(id);
    }

    function handleUpdate(e) {
        e.preventDefault();
        updateTodo(id, task);
        setIsEditing(false);
    }
    
    function handleChange(e) {
        setEditTask(e.target.value);
    }
    function toggleEdit() {
        setIsEditing(e => !e);
    }


if(isEditing) {
    return (
        <div>
        <form onSubmit={handleUpdate}>
            <input type="text" value={editTask} onChange={handleChange} />
            <button>Update</button>
        </form>
        </div>
    );
}


    return (
        <div> 
        <li>{task} <button onClick={toggleEdit}>Edit</button> <button onClick={handleRemove}>X</button></li>
    </div>
    )
}

export default Todo;