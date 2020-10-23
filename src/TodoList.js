import React from "react";
import {useSelector, useDispatch} from "react-redux";
import TodoForm from "./TodoForm";
import {v4 as uuid} from "uuid";
import Todo from "./Todo";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    function handleAddTodo(task) {
        dispatch({
            type:'ADD_TODO',
            id: uuid(),
            task
            
        })
    }

    function handleDelete(id) {
        dispatch({ type: "REMOVE_TODO", id });
    }

    function handleUpdate(id, updatedTask) {
        dispatch({
        type: "UPDATE_TODO",
        id,
        updatedTask 
        });
    }

    const todoList = todos.map(todo => (
        <Todo 
        id={todo.id}
        key={todo.id}
        task = {todo.task}
        deleteTodo={handleDelete} 
        updateTodo={handleUpdate}
        />
    ))

    return(
        <div>
        <TodoForm newTodo={handleAddTodo} />
        <ul>
            {todoList}
        </ul>
        </div>
    )
}

export default TodoList;