import React, { useState } from 'react';
import TodoList from './TodoList.tsx';
import { fetchDeletedall, Todo } from './Todo.ts';

interface inputProps {
  list: Todo[];
  addtodolist: (addtodo: Todo) => void;
  deleteTodo: (deleteTodo: Todo) => void;
}

const TodoCreationForm = ({ list, addtodolist, deleteTodo }: inputProps) => {
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');

  const handleDate = (e: React.ChangeEvent<HTMLDataElement>) => {
    setDate(e.target.value);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const addlist = (event: any) => {
    event.preventDefault();
    const newTodo = {
      done: false,
      due_date: date,
      title: value,
      id: value,
      content: value,
    };
    if (!value) return;
    addtodolist(newTodo);
    setValue('');
    setDate('');
  };
  const handleDeleteAll = async () => {
    await fetchDeletedall();
  };
  return (
    <form onSubmit={addlist}>
      <label className="TodoForm">
        <input
          type={'date'}
          placeholder={'due Date'}
          value={date}
          onChange={handleDate}
        />
        <input
          type="text"
          placeholder={'Enter a new Todo'}
          value={value}
          onChange={handleInput}
        />
        <button> Add Todo</button>
        <select>
          <option value={date}>Due date</option>
          <option value={'name'}>Name</option>
          <option>Done</option>
          <option>Undone</option>
        </select>
      </label>

      <TodoList list={list} deleteTodo={deleteTodo} />
      <button onClick={handleDeleteAll}> DELETE ALL</button>
    </form>
  );
};
export default TodoCreationForm;
