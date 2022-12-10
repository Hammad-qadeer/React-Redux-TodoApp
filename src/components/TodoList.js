
import "../index.css"
import SortableTable from "./SortableTable";
const TodoList = () => {

    return ( 
        <ul className="list-group w-50 m-5">
             {/* <SearchTodo searchTodo={searchTodo} filteredData={filteredData}/> */}
             <SortableTable/>
        </ul>
     );
}
 
export default TodoList;