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
import Particles from "react-tsparticles";


function App() {
    const [state, dispatch] = useReducer(AppReducer, {
        todos: []
    })

    return (
        <TodosContext.Provider value={{
            todos: state.todos,
            dispatch
        }}>
            <div className="App pt-5 pb-5">
                <Particles style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1
                }}
                           id="tsparticles"
                           options={{
                               background: {
                                   color: {
                                       value: "#efefef"
                                   },
                                   position: "50% 50%",
                                   repeat: "no-repeat",
                                   size: "cover"
                               },
                               fullScreen: {
                                   enable: true,
                                   zIndex: -1
                               },
                               particles: {
                                   color: {
                                       value: "#1b1e34"
                                   },
                                   move: {
                                       attract: {
                                           rotate: {
                                               x: 600,
                                               y: 1200
                                           }
                                       },
                                       enable: true,
                                       path: {},
                                       outModes: {
                                           bottom: "out",
                                           left: "out",
                                           right: "out",
                                           top: "out"
                                       },
                                       speed: 0.2
                                   },
                                   number: {
                                       density: {
                                           enable: true
                                       },
                                       value: 4
                                   },
                                   opacity: {
                                       random: {
                                           enable: true,
                                           minimumValue: 0.3
                                       },
                                       value: {
                                           min: 0.3,
                                           max: 0.5
                                       },
                                       animation: {
                                           speed: 1,
                                           minimumValue: 0.1
                                       }
                                   },
                                   shape: {
                                       options: {
                                           polygon: {
                                               sides: 6
                                           }
                                       },
                                       type: "polygon"
                                   },
                                   size: {
                                       random: {
                                           enable: true,
                                           minimumValue: 100
                                       },
                                       value: {
                                           min: 100,
                                           max: 160
                                       },
                                       animation: {
                                           minimumValue: 40
                                       }
                                   }
                               }
                           }}
                />
                <Header/>
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <TodoForm/>
                    <TodoList/>
                </div>
                <p className="pt-4">Developed with ❤ by <a href="http://imomid.ir"
                                                           target="_blank">Omid Moghadasi</a></p>
            </div>
        </TodosContext.Provider>
    );
}

export default App;
