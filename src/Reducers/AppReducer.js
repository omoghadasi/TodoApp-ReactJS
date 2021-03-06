function AppReducer(state, action) {
    switch (action.type) {
        case 'add_todo':
            return addTodo(state, action);
            break;
        case 'delete_todo':
            return deleteTodo(state, action);
            break;
        case 'done_todo':
            return doneTodo(state, action);
            break;
        case 'undone_todo':
            return undoneTodo(state, action);
            break;
        case 'edit_todo':
            return editTodo(state, action);
            break;
        default:
            return state
    }
}

export default AppReducer;


let addTodo = (state, action) => {
    let {text} = action.payload
    return {
        todos: [
            ...state.todos,
            {key: Date.now(), done: false, text}
        ]
    }
}

let deleteTodo = (state, action) => {
    let {key} = action.payload
    return {
        todos: [
            ...state.todos.filter(item => item.key !== key)
        ]
    }
}
let doneTodo = (state, action) => {
    let {key} = action.payload
    let {todos} = state;

    let newTodos = todos.filter(item => item.key !== key)
    let item = todos.filter(item => item.key === key)
    item[0].done = true

    return {
        todos: [
            ...newTodos, ...item
        ]
    }
}

let undoneTodo = (state, action) => {
    let {key} = action.payload
    let {todos} = state;

    let newTodos = todos.filter(item => item.key !== key)
    let item = todos.filter(item => item.key === key)
    item[0].done = false

    return {
        todos: [
            ...newTodos, ...item
        ]
    }
}

let editTodo = (state, action) => {
    let {key, text} = action.payload
    let {todos} = state;

    let newTodos = todos.filter(item => item.key !== key)
    let item = todos.filter(item => item.key === key)
    item[0].text = text

    return {
        todos: [
            ...newTodos, ...item
        ]
    }
}