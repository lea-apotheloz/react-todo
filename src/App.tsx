import './App.css';
import TodoCreationForm from './TodoCreationForm.tsx';
import { useEffect, useState } from 'react';
import { fetchPost, Todo } from './Todo.ts';

const App = () => {
  const [list, setlist] = useState<Todo[]>([]);

  const addtodolist = async (addtodo: Todo) => {
    setlist([...list, addtodo]);
    await fetchPost(addtodo.title, addtodo.due_date, addtodo.done);
  };
  useEffect(() => {
    fetch('https://api.todos.in.jt-lab.ch/todos')
      .then((response) => response.json())
      .then((data) => {
        setlist(data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  const deleteTodo = (todo: Todo) => {
    setlist((list) =>
      list.filter((t) => {
        return t.id !== todo.id;
      }),
    );
  };

  return (
    <div className="content">
      <h1>My Todo List</h1>
      <TodoCreationForm
        list={list}
        addtodolist={addtodolist}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};
export default App;
