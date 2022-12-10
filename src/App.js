import AddTodoList from "./components/AddTodoList"
import Loading from './components/Loading'
import Pagination from "./components/Pagination"
import TodoList from "./components/TodoList"
import { useTasks } from "./TodoListContext"
import SearchTodo from "./components/SearchTodo"

function App() {
  const {todos, isLoading} = useTasks();

  return (
  <div>
        <AddTodoList/>
        {isLoading ? <><div style={{height: 200}}><Loading/></div></> : null}
        {todos ? <SearchTodo /> : <Loading/>}
        {todos ? <TodoList/> : <Loading/>}
        <Pagination totalPosts={todos?.length}/>
  </div>
  )
}

export default App;