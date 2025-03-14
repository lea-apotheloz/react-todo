import { fetchDeleted, fetchPatch, Todo } from './Todo.ts';
import { ChangeEvent, useEffect, useState } from 'react';

interface todoProps {
  todo: Todo;
  deleteTodo: (deleteTodo: Todo) => void;
}

const ElementTodo = ({ todo, deleteTodo }: todoProps) => {
  const handleDeleteTodo = async () => {
    try {
      await fetchDeleted(todo);
      deleteTodo(todo);
    } catch (err) {
      console.error(err);
    }
  };

  const [status, setstatus] = useState<boolean>(todo.done);
  const handleStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setstatus(event.target.checked);
  };
  useEffect(() => {
    const handleStatus = async () => {
      await fetchPatch(status, todo);
    };
    handleStatus().then((r) => console.log(r));
  }, [status, fetchPatch, todo]);

  return (
    <li>
      {todo.title}
      <button className={'del'} onClick={handleDeleteTodo}>
        {' '}
        DELETE
      </button>
      <input
        type="checkbox"
        onChange={handleStatusChange}
        checked={status}
      ></input>
      {todo.due_date}
    </li>
  );
};
export default ElementTodo;
