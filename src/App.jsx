import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([
        {
        id: 1,
        title: "Estudar React",
        description: "Integrar o react para o projeto Parada Do Frango",
        isCompleted: false
        },
        {
            id: 2,
            title: "Estudar Tailwind",
            description: "Integrar o Tailwind para o projeto Parada Do Frango",
            isCompleted: false
        },
        {
            id: 3,
            title: "Estudar Pagination",
            description: "Integrar o Pagination para o projeto Parada Do Frango",
            isCompleted: false
        }
    ])

    function onDeleteTaskClick(id) {
        const newTasks = tasks.filter(t => t.id !== id)
        setTasks(newTasks);
    }
    function onCompleteTaskClick(id) {
        const newTasks = tasks.map(t => {
            // ATUALIZAR O ESTADO
            if(t.id === id) {
                return {...t, isCompleted: !t.isCompleted}
            }
            return t;
        })
        setTasks(newTasks);
    }

    return(
        <div className={"w-screen h-screen bg-slate-500 flex justify-center p-6"}>
            <div className="w-[500px]">
                <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
                <AddTask />
                <Tasks tasks={tasks}
                       onCompleteTaskClick={onCompleteTaskClick}
                       onDeleteTaskClick={onDeleteTaskClick}
                />
            </div>
        </div>
    );
}

export default App;