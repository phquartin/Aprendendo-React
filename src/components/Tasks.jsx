import {ChevronRightIcon, TrashIcon} from "lucide-react";
import {redirect, useNavigate} from "react-router-dom";

function Tasks({tasks, onCompleteTaskClick, onDeleteTaskClick}) {
    const navigate = useNavigate();

    function onSeeDetailsClick(t) {
        const query = new URLSearchParams()
        query.set("title", t.title)
        query.set("description", t.description)
        navigate(`/task?${query.toString()}`)
    }

    return(
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                {tasks.map(t =>
                <li key={t.id} className="flex gap-2">
                    <button
                        onClick={() => onCompleteTaskClick(t.id)}
                        className={`bg-slate-400 w-full text-left text-white p-2 rounded-md 
                        ${t.isCompleted && 'line-through'}
                        `}>
                        {t.title}
                    </button>
                    <button className="bg-slate-400 p-2 rounded-md text-white"
                            onClick={() => onSeeDetailsClick(t)}
                    >
                        <ChevronRightIcon />
                    </button>
                    <button
                        onClick={() => onDeleteTaskClick(t.id)}
                        className="bg-slate-400 p-2 rounded-md text-white">
                        <TrashIcon />
                    </button>
                </li>
            )}
            </ul>
    )
}
export default Tasks;