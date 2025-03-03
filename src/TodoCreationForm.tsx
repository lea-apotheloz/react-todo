import React, {useState} from "react";
import TodoList from "./TodoList.tsx";

const TodoCreationForm = ({list, addtodolist}:{list:string[] ;addtodolist: (addtodolist: string) => void}) => {

    const [value, setValue] = useState('');


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const addlist = (event: any) => {
        event.preventDefault();
        if (!value) return


       addtodolist(value)
        setValue('')
    }

    return (
        <form onSubmit={addlist}>
            <label className="TodoForm">
                <input type={'date'} placeholder={'due Date'}/>
                <input type="text" placeholder={'Enter a new Todo'} value={value} onChange={handleInput}/>
                <button> Add Todo</button>

            </label>

            <select>
                <option>SORT</option>
                <option>Due date</option>
                <option>Name</option>
                <option>Done</option>
                <option>Undone</option>
            </select>

            <TodoList list={list}/>

        </form>
    )
}
export default TodoCreationForm;
