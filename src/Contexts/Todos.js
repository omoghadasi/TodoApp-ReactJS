import React from "react";

const TodosContext = React.createContext({
    todos: [],
    add: () => {
    }
})

export default TodosContext;