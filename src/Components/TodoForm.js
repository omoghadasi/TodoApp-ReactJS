import React, {useState, useContext} from "react";
import TodosContext from "../Contexts/Todos";

function TodoForm() {
    const [text, setText] = useState('')
    const todosContext = useContext(TodosContext)
    let inputHandler = e => {
        setText(e.target.value)
    }

    let formHandler = e => {
        e.preventDefault()
        todosContext.dispatch({type: 'add_todo', payload: {text}})
        setText('')
    }
    return (
        <form className="col-6 form-inline p-0"
              onSubmit={formHandler}>
            <div className="form-group col-10">
                <input type="text"
                       className="form-control col-12"
                       id="InputTodo"
                       onChange={inputHandler}
                       value={text}
                       placeholder="Please Enter Todo"/>
            </div>
            <button type="submit"
                    className="btn btn-primary col-2">Add
            </button>
        </form>
    )
}

export default TodoForm;