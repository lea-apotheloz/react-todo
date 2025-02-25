const ElementTodo = ({ todo }: { todo: string }) => {
  return (
    <li>
      {todo}
      <button className={'del'}> DELETE </button>
      <data> 22.03.2025</data>
    </li>
  );
};
export default ElementTodo;
