import {useState} from "react";

function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input type="text" placeholder="Digite o titulo da tarefa"
                   className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                   value={title}
                   onChange={(e) => setTitle(e.target.value)}
            />
            <input type="text" placeholder="Digite a descricao da tarefa"
                   className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                   value={description}
                   onChange={(e) => setDescription(e.target.value)}
            />
            <button
                onClick={() => {
                    if (title.length <= 5 || description.length <= 5) {
                         return alert("Preencha todos os campos com no minimo 5 caracteres");
                    }
                    onAddTaskSubmit(title, description)
                    setTitle("")
                    setDescription("")
                }}
                disabled={title.length === 0 || description.length === 0}
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
            >
                Adicionar Tarefa
            </button>
        </div>
    )
}

export default AddTask;