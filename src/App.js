import React, {useReducer} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Import Components
import Header from "./Layouts/Header";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

//Import Reducers
import AppReducer from "./Reducers/AppReducer";

//Import Contexts
import TodosContext from "./Contexts/Todos";

function App() {
    const [state, dispatch] = useReducer(AppReducer, {
        todos: []
    })

    return (
        <TodosContext.Provider value={{
            todos: state.todos,
            dispatch
        }}>
            <div className="App">
                <Header/>
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <TodoForm/>
                    <TodoList/>
                </div>
            </div>
        </TodosContext.Provider>
    );
}

export default App;
