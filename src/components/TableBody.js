import { useTasks } from "../TodoListContext";
const TableBody = ({headers}) => {
    const {currentPosts, toggleComplete, deleteTodo, filteredData} = useTasks();
    return ( 
        <tbody>
            {currentPosts?.map((todo) => {
                return (
                    <tr>
                    {headers.map(({accessor}) => {
                    const tData = todo[accessor] ? todo[accessor] : "--";
                    return <td key={accessor} onClick={() => toggleComplete(todo.id, !todo.complete)} className={todo.complete ? "strike" : "todo"}>
                        {tData}
                        </td>
                        })}
                    <td type="button" onClick={() => deleteTodo(todo.id)} className="btn btn-outline-danger">Delete</td>
                    </tr>
                )
            })}
        </tbody>
     );
}
 
export default TableBody;