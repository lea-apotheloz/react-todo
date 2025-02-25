import './App.css';
import TodoCreationForm from "./TodoCreationForm.tsx";
import TodoList from "./TodoList.tsx";

const App = () => {
  return (
    <div className="content">
      <h1>My Todo List</h1>
        <TodoCreationForm />
        < TodoList />
    </div>
  );
};

export default App;

