import ElementTodo from './ElementTodo.tsx';
import { Todo } from './Todo.ts';

interface inputProps {
  list: Todo[];
  deleteTodo: (deleteTodo: Todo) => void;
}

const TodoList = ({ list, deleteTodo }: inputProps) => {
  return (
    <div className={'TodoList'}>
      <ul>
        {list.map((t: Todo) => (
          <ElementTodo todo={t} key={t.id} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
