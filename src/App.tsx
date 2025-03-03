import './App.css';
import TodoCreationForm from './TodoCreationForm.tsx';
import {useState} from "react";
const App = () => {


    const [list, setlist] = useState<string[]>([]);
    const addtodolist=(addtodo:string)=> {
        setlist([...list, addtodo]);
    }

    return (
        <div className="content">
            <h1>My Todo List</h1>
            <TodoCreationForm list={list} addtodolist={addtodolist}/>
        </div>
    );
};
export default App;
