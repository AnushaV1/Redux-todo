const INITIAL_STATE = { todos: [] };

function rootReducer(state=INITIAL_STATE, action) {
    switch(action.type){
    case 'ADD_TODO':
        return {
            ...state, todos: [...state.todos, {task: action.task, id: action.id}]
        }

    case 'REMOVE_TODO':
        return {
            ...state, todos: state.todos.filter(todo => todo.id !== action.id)
        }

    case 'UPDATE_TODO':
        const todos = state.todos.map(todo => {
            if (todo.id === action.id) {
                console.log(action.updatedTask)
                return { ...todo, task: action.updatedTask };
            }
            return todo
        });
        return {
            ...state, todos
        }

    default:
        return state;
}
}

export default rootReducer;