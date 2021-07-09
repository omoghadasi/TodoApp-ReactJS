import React, {useContext} from "react";
import TodosContext from "../Contexts/Todos";
import Todo from "./Todo";

function TodoList() {
    const todosContext = useContext(TodosContext)

    let {todos} = todosContext;

    console.log(todos)
    return (
        <div className="col-6 mt-3">
            {
                todos.length === 0
                    ? <p>There is not Todo</p>
                    : todos.map(item => <Todo key={item.key}
                                              text={item.text}/>)
            }

        </div>
    )
}

export default TodoList