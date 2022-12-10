import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useTasks } from "../TodoListContext";

const SortableTable = () => {
  const {todos,setTodos} = useTasks();

    const headers = [
        {accessor: "id", label: "ID"},
        {accessor: "title", label: "Title"},
        {accessor: "created_at", label: "Created At"},
        {accessor: "updated_at", label: "Updated At"},
    ]

    const handleSorting= (sortField, sortingOrder) => {
    if(sortField) {
      const sorted = [...todos].sort((a,b) => {
        if(a[sortField] === null) return 1;
        if(b[sortField] === null) return -1;
        if(a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numberic: true,
          }) * (sortingOrder === "asc" ? 1 : -1)
         )
      })
      setTodos(sorted)
    }
    }
    return ( 
        <table className="table">
          <TableHead headers={headers} handleSorting={handleSorting}/>
          <TableBody headers={headers} todos={todos}/>
        </table>
     );
}
 
export default SortableTable;