import ElementTodo from './ElementTodo.tsx';

const TodoList = ({list}:{list:string[]},) => {
    //parametre list

    return (
    <div className={'TodoList'}>
      <ul>
        {list.map((todo, item) => (
          <ElementTodo  todo={todo} key={item} />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
