import React, {useContext, useState} from "react";
import TodosContext from "../Contexts/Todos";
import Todo from "./Todo";

function TodoList() {
    const todosContext = useContext(TodosContext)
    const [statusDone, setStatusDone] = useState(false);
    let {todos} = todosContext;
    let filterTodos = todos.filter(item => item.done === statusDone)
    return (
        <div className="col-6 mt-3">
            <div className="d-flex">
                <button className={`btn btn-outline-primary m-1 ${!statusDone ? 'active' : ''}`}
                        onClick={() => setStatusDone(false)}>Undone <span className={`badge ${!statusDone ? 'badge-light' : 'badge-primary'}`}>{todos.filter(item => item.done === false).length}</span>
                </button>
                <button className={`btn btn-outline-primary m-1 ${statusDone ? 'active' : ''}`}
                        onClick={() => setStatusDone(true)}>Done <span className={`badge ${statusDone ? 'badge-light' : 'badge-primary'}`}>{todos.filter(item => item.done === true).length}</span>
                </button>
            </div>
            <div className="p-2 mt-2 rounded"
                 style={{background: "white"}}>
                {
                    filterTodos.length === 0
                        ? <p>There isn't Todo</p>
                        : filterTodos.map(item => <Todo key={item.key}
                                                        item={item}/>)
                }
            </div>


        </div>
    )
}

export default TodoList