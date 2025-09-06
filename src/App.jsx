import {useState} from "react";

function App() {
    const [message, setMessage] = useState('Ola, Dev!')
    return(
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage("Ola, voce clicou em mim Dev!")}>Clique aqui</button>
        </div>
    );
}

export default App;