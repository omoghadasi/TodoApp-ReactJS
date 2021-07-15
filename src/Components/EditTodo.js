import React, {useState} from "react";

function EditTodo(props) {
    const [text, setText] = useState(props.item.text)
    let inputHandler = e => setText(e.target.value)

    return (
        <div className="col-12 border-top border-bottom m-1 p-0">
            <div className="d-flex col-12 p-2 align-items-center">
                <input className="col-8 text-left mb-0 form-control"
                       value={text}
                       onChange={inputHandler}/>
                <div className="col-4 m-1">
                    <button type="button"
                            className="btn btn-primary btn-sm btn-block"
                            onClick={() => props.edit(text)}>Edit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditTodo;