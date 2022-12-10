import { useTasks } from "../TodoListContext";
const AddTodoList = () => {

   const {postTodo, setTodoText, todoText} = useTasks();
    return ( 
<>
  <form>
  {/* <!-- As a heading --> */}
    <nav className="navbar bg-light">
    <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Todo App111</span>
    </div>
    </nav>
    <div className="mb-3 w-50 m-5"> 
    <input type="text" className="form-control" placeholder="Enter Todos..." onChange={(e) => {
        setTodoText(e.target.value)
    }} value={todoText}/>
    <button className="btn btn-primary" type="button" onClick={postTodo}>Add</button>
    </div>
  </form>
</>
  );
}
 
export default AddTodoList;