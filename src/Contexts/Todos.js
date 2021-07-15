import React from "react";

const TodosContext = React.createContext({
    todos: [],
    add: () => {
    },
    delete: () => {
    },
    toggle: () => {
    },
    edit: () => {
    }
})

export default TodosContext;