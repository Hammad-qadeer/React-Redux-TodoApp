import { useTasks } from "../TodoListContext";

const SearchTodo = () => {
    const {searchTodo} = useTasks();
    return ( 
        <div style={{ margin: '0 auto'}}>
            <label className="m-5">Search:</label>
            <input type="text" onChange={(event) => searchTodo(event)}/>
        </div>
     );
}
 
export default SearchTodo;