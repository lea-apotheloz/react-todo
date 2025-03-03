const ElementTodo = ({todo}: { todo: string }) => {
    return (
        <li>
          <p> {todo} </p>
            <button className={'del'}> DELETE</button>
            <data> dd/mm/yyyy</data>
        </li>
    );
};
export default ElementTodo;
