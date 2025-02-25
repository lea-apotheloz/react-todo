import ElementTodo from "./ElementTodo.tsx";

const list = ["Todo 1", "Todo 2", "Todo 3", "Todo 4","Todo"]

const TodoList = () => {

    return (
        <div className={"TodoList"}>
            <ul>
            {list.map((todo, item)=> <ElementTodo todo={todo} key={item}/>)}
        </ul>
        </div>
    )
};
export default TodoList;