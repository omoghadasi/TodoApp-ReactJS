import React, {useContext, useState} from "react";
import TodosContext from "../Contexts/Todos";
import EditTodo from "./EditTodo";

function Todo(props) {
    const todosContext = useContext(TodosContext)

    const [edit, setEdit] = useState(false)

    let deleteHandler = e => {
        e.preventDefault()
        todosContext.dispatch({type: 'delete_todo', payload: {key: props.item.key}})
    }

    let doneHandler = e => {
        e.preventDefault()
        props.item.done ? todosContext.dispatch({
            type: 'undone_todo',
            payload: {key: props.item.key}
        }) : todosContext.dispatch({type: 'done_todo', payload: {key: props.item.key}})
    }

    let editHandler = text => {
        todosContext.dispatch({type: 'edit_todo', payload: {key: props.item.key, text}})
        setEdit(false)
    }

    return (
        !edit
            ? (<div className="col-12 border-top border-bottom m-1 p-0">
                <div className="d-flex col-12 p-2 align-items-center">
                    <h6 className="col-8 text-left mb-0">
                        {props.item.text}
                    </h6>
                    <div className="col-4 m-1">
                        <div className="btn-group btn-group-sm"
                             role="group"
                             aria-label="Basic example">
                            <button type="button"
                                    className={`btn ${props.item.done ? 'btn-warning' : 'btn-success'}`}
                                    onClick={doneHandler}>{props.item.done ? 'Undone' : 'Done'}
                            </button>
                            <button type="button"
                                    className="btn btn-primary"
                                    onClick={() => setEdit(true)}>Edit
                            </button>
                            <button type="button"
                                    className="btn btn-danger"
                                    onClick={deleteHandler}>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>)
            :
            (<EditTodo item={props.item}
                       edit={editHandler}/>)
    )
}

export default Todo;