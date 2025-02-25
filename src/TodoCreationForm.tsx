const TodoCreationForm = () => {
  return (
    <form>
      <label className="TodoForm">
        <input type={'date'} placeholder={'due Date'} />
        <input type="text" placeholder={'Enter a new Todo'} />
        <button> Add Todo</button>
      </label>

      <select>
        <option>SORT</option>
        <option>Due date</option>
        <option>Name</option>
        <option>Done</option>
        <option>Undone</option>
      </select>
    </form>
  );
};
export default TodoCreationForm;
