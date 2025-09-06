import {useState} from "react";
import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";

function App() {
    return(
        <div>
            <h1>Gerenciador de Tarefas</h1>
            <AddTask />
            <Tasks />
        </div>
    );
}

export default App;