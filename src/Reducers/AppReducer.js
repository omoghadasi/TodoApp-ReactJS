function AppReducer(state, action) {
    switch (action.type) {
        case 'add_todo':
            return addTodo(state, action);
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